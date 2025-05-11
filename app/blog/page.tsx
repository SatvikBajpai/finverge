import { BlogContent } from "@/components/blog-content"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-white">
          <BlogContent />
        </section>
      </main>
    </div>
  )
}

