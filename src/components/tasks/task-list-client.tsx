"use client";

import { useMemo, useState } from "react";
import { TaskPostCard } from "@/components/shared/task-post-card";
import { buildPostUrl } from "@/lib/task-data";
import { normalizeCategory, isValidCategory } from "@/lib/categories";
import type { TaskKey } from "@/lib/site-config";
import type { SitePost } from "@/lib/site-connector";
import { getLocalPostsForTask } from "@/lib/local-posts";
import { Search } from "lucide-react";

type Props = {
  task: TaskKey;
  initialPosts: SitePost[];
  category?: string;
  enhancedFilters?: boolean;
};

function getPostCategory(post: SitePost) {
  const content = post.content && typeof post.content === "object" ? post.content : {};
  return typeof (content as any).category === "string" ? normalizeCategory((content as any).category) : "";
}

export function TaskListClient({ task, initialPosts, category, enhancedFilters = false }: Props) {
  const localPosts = getLocalPostsForTask(task);
  const [query, setQuery] = useState("");
  const [dateFilter, setDateFilter] = useState<"all" | "7d" | "30d" | "year">("all");

  const merged = useMemo(() => {
    const bySlug = new Set<string>();
    const combined: Array<SitePost & { localOnly?: boolean; task?: TaskKey }> = [];

    localPosts.forEach((post) => {
      if (post.slug) {
        bySlug.add(post.slug);
      }
      combined.push(post);
    });

    initialPosts.forEach((post) => {
      if (post.slug && bySlug.has(post.slug)) return;
      combined.push(post);
    });

    const normalizedCategory = category ? normalizeCategory(category) : "all";
    if (normalizedCategory === "all") {
      return combined.filter((post) => {
        const content = post.content && typeof post.content === "object" ? post.content : {};
        const value = typeof (content as any).category === "string" ? (content as any).category : "";
        return !value || isValidCategory(value);
      });
    }

    return combined.filter((post) => {
      const content = post.content && typeof post.content === "object" ? post.content : {};
      const value =
        typeof (content as any).category === "string"
          ? normalizeCategory((content as any).category)
          : "";
      return value === normalizedCategory;
    });
  }, [category, initialPosts, localPosts]);
  const categories = useMemo(() => {
    const set = new Set<string>();
    merged.forEach((post) => {
      const cat = getPostCategory(post);
      if (cat) set.add(cat);
    });
    return Array.from(set).sort();
  }, [merged]);

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const filtered = useMemo(() => {
    const lower = query.trim().toLowerCase();
    const now = Date.now();
    return merged.filter((post) => {
      if (activeCategory !== "all" && getPostCategory(post) !== activeCategory) return false;
      if (dateFilter !== "all") {
        const postTime = new Date(post.publishedAt || post.createdAt || 0).getTime();
        if (Number.isFinite(postTime) && postTime > 0) {
          const diff = now - postTime;
          if (dateFilter === "7d" && diff > 7 * 24 * 60 * 60 * 1000) return false;
          if (dateFilter === "30d" && diff > 30 * 24 * 60 * 60 * 1000) return false;
          if (dateFilter === "year" && diff > 365 * 24 * 60 * 60 * 1000) return false;
        }
      }
      if (!lower) return true;
      const haystack = `${post.title} ${post.summary || ""} ${getPostCategory(post)}`.toLowerCase();
      return haystack.includes(lower);
    });
  }, [merged, query, dateFilter, activeCategory]);

  if (!filtered.length) {
    return (
      <div className="rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
        No posts yet for this section.
      </div>
    );
  }

  return (
    <>
      {enhancedFilters ? (
        <section className="mb-8 rounded-[1.7rem] border border-[#f0d8c8] bg-white p-5 shadow-[0_14px_38px_rgba(15,23,42,0.06)]">
          <div className="grid gap-3 lg:grid-cols-[1fr_auto_auto]">
            <div className="flex items-center gap-3 rounded-xl border border-[#ecd2c1] bg-[#fff8f3] px-3">
              <Search className="h-4 w-4 text-[#CC561E]" />
              <input
                className="h-11 w-full bg-transparent text-sm outline-none"
                placeholder="Search press releases..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </div>
            <select
              className="h-11 rounded-xl border border-[#ecd2c1] bg-white px-3 text-sm"
              value={dateFilter}
              onChange={(event) => setDateFilter(event.target.value as "all" | "7d" | "30d" | "year")}
            >
              <option value="all">Any date</option>
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="year">Last 12 months</option>
            </select>
            <select
              className="h-11 rounded-xl border border-[#ecd2c1] bg-white px-3 text-sm"
              value={activeCategory}
              onChange={(event) => setActiveCategory(event.target.value)}
            >
              <option value="all">All categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </section>
      ) : null}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => {
          const localOnly = (post as any).localOnly;
          const href = localOnly
            ? `/local/${task}/${post.slug}`
            : buildPostUrl(task, post.slug);
          return <TaskPostCard key={post.id} post={post} href={href} taskKey={task} />;
        })}
      </div>
    </>
  );
}
