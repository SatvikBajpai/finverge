import Image from "next/image"

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Shreya Bajpai",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzaW5lc3N3b21hbnxlbnwwfHwwfHx8MA%3D%3D",
      bio: "Shreya is a seasoned financial expert with over 15 years of experience in the industry. She founded FinVerge with a vision to revolutionize financial services for businesses.",
    },
    {
      name: "Rahul Sharma",
      role: "Chief Financial Officer",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVzaW5lc3NtYW58ZW58MHx8MHx8fDA%3D",
      bio: "Rahul brings 20 years of experience in corporate finance and strategy. He oversees all financial operations and plays a key role in shaping FinVerge's growth strategy.",
    },
    {
      name: "Priya Patel",
      role: "Head of Tax Services",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1c2luZXNzd29tYW58ZW58MHx8MHx8fDA%3D",
      bio: "Priya is a certified tax expert with a decade of experience in both domestic and international tax laws. She leads our tax compliance and planning services.",
    },
    {
      name: "Amit Kumar",
      role: "Lead Business Analyst",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1c2luZXNzbWFufGVufDB8fDB8fHww",
      bio: "Amit specializes in business intelligence and data analytics. He helps our clients derive actionable insights from their financial data to drive growth.",
    },
  ]

  // Add padding-top to the main container to account for the fixed navbar
  return (
    <div className="flex flex-col min-h-screen pt-16">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-[#1B365D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white text-center">
              Our Team
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl text-center mt-4">
              Meet the experts behind FinVerge's success
            </p>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col items-center space-y-4">
                  <div className="relative w-48 h-48 overflow-hidden rounded-full">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-[#1B365D]">{member.name}</h2>
                  <p className="text-gray-600 font-medium">{member.role}</p>
                  <p className="text-gray-600 text-center">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

