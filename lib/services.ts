"use server"

export async function getServices() {
  // Simulating an async operation
  await new Promise((resolve) => setTimeout(resolve, 100))

  return [
    {
      icon: "BriefcaseBusiness",
      title: "Virtual CFO Services",
      description:
        "Our Virtual CFO services provide strategic financial leadership without the overhead of a full-time executive. We assist with financial planning, cash flow management, budgeting, and risk assessment, ensuring your business makes informed decisions to drive growth and profitability.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZpbmFuY2lhbCUyMGFkdmlzb3J8ZW58MHx8MHx8fDA%3D",
    },
    {
      icon: "BookOpen",
      title: "Fund Raise and Capital Assistance",
      description:
        "Securing funding is a critical aspect of business growth. We assist in preparing compelling investment proposals, identifying potential investors, and structuring deals to meet your capital requirements, facilitating successful fundraising endeavors.",
      image:
        "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVuZHJhaXNpbmd8ZW58MHx8MHx8fDA%3D",
    },
    {
      icon: "FileSpreadsheet",
      title: "Accounting & Financial Reporting Outsourcing",
      description:
        "Our team manages your accounting functions, from bookkeeping to financial statement preparation, ensuring accuracy and compliance with relevant standards. By outsourcing these tasks, you can reduce overhead costs and gain access to specialized expertise.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2069&auto=format&fit=crop",
    },
    {
      icon: "BarChart3",
      title: "Income Tax and GST Compliances",
      description:
        "Staying compliant with tax regulations is crucial for any business. We offer comprehensive services to manage your Income Tax and Goods and Services Tax (GST) obligations, including timely filings and adherence to statutory requirements, minimizing the risk of penalties.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdWQlMjBhY2NvdW50aW5nfGVufDB8fDB8fHww",
    },
    {
      icon: "PiggyBank",
      title: "Business Insights & MIS Reporting",
      description:
        "Transform your financial data into actionable insights with our Management Information System (MIS) reporting services. We provide detailed analyses that help you understand performance metrics, identify trends, and make strategic decisions to enhance efficiency and profitability.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjBpbnNpZ2h0c3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      icon: "BriefcaseBusiness",
      title: "Finance Leadership Hiring",
      description:
        "Building a strong financial team is essential for sustained success. We support you in recruiting top-tier finance professionals, from controllers to CFOs, ensuring your leadership team has the expertise to navigate complex financial landscapes.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGlyaW5nfGVufDB8fDB8fHww",
    },
    {
      icon: "Building",
      title: "Company Incorporation & Startup Registration",
      description:
        "Navigating the complexities of company formation can be challenging. We streamline the process by handling all legal and regulatory requirements, ensuring your startup is registered correctly and efficiently, allowing you to focus on building your business.",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGluY29ycG9yYXRpb258ZW58MHx8MHx8fDA%3D",
    },
    {
      icon: "Coins",
      title: "Wealth Management",
      description:
        "Our Wealth Management services are designed to help clients build, preserve, and manage their financial assets effectively. We provide personalized financial planning, investment strategies, retirement planning, and estate conservation to ensure long-term financial security. Our approach is client-centric, focusing on understanding individual goals and crafting strategies that align with their financial aspirations.",
      image:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhbHRoJTIwbWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      icon: "Users",
      title: "Payroll & HR Compliances",
      description:
        "We assist organizations in streamlining their payroll processes and ensuring adherence to HR regulations. Our services include payroll processing, tax compliance, benefits administration, and policy development. By leveraging our expertise, businesses can mitigate risks associated with non-compliance, enhance operational efficiency, and maintain a satisfied workforce.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGF5cm9sbHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ] as const
}

