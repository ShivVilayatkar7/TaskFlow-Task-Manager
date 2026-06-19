import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-[#F6F7FB] min-h-screen scroll-smooth">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-[#F6F7FB]/90 backdrop-blur">
        <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-black">
            TaskFlow
          </h1>

          <div className="hidden md:flex items-center gap-8 text-gray-600">
            <a href="#features" className="hover:text-black transition">
              Features
            </a>

            <a href="#preview" className="hover:text-black transition">
              Preview
            </a>

            <a href="#contact" className="hover:text-black transition">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="px-5 py-2 font-medium"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-black text-white px-5 py-3 rounded-2xl font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              Modern Productivity Platform
            </span>

            <h1 className="text-6xl font-bold leading-tight mt-8">
              Manage Tasks.
              <br />
              Track Progress.
              <br />
              Stay Productive.
            </h1>

            <p className="text-gray-500 text-lg mt-6 max-w-xl">
              TaskFlow helps individuals organize projects,
              manage daily work, and stay focused using a
              modern dashboard and Kanban workflow.
            </p>

            <div className="flex gap-4 mt-8">
              <Link
                to="/register"
                className="bg-black text-white px-8 py-4 rounded-2xl font-medium hover:opacity-90 transition"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="bg-white px-8 py-4 rounded-2xl font-medium hover:shadow-sm transition"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div>
            <div className="bg-white rounded-[32px] p-8 shadow-sm">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-yellow-50 rounded-2xl p-4">
                  <p className="text-xs text-gray-500">
                    Tasks
                  </p>

                  <h3 className="text-3xl font-bold">
                    24
                  </h3>
                </div>

                <div className="bg-blue-50 rounded-2xl p-4">
                  <p className="text-xs text-gray-500">
                    Active
                  </p>

                  <h3 className="text-3xl font-bold">
                    12
                  </h3>
                </div>

                <div className="bg-green-50 rounded-2xl p-4">
                  <p className="text-xs text-gray-500">
                    Done
                  </p>

                  <h3 className="text-3xl font-bold">
                    8
                  </h3>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-[#F8F9FC] rounded-2xl p-4">
                  Design Dashboard
                </div>

                <div className="bg-[#F8F9FC] rounded-2xl p-4">
                  Complete API Integration
                </div>

                <div className="bg-[#F8F9FC] rounded-2xl p-4">
                  Deploy Application
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="max-w-7xl mx-auto px-8 py-20"
      >
        <h2 className="text-4xl font-bold text-center mb-14">
          Everything You Need
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-8 hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">
              Dashboard
            </h3>

            <p className="text-gray-500">
              Monitor tasks, priorities, upcoming work,
              and productivity from one place.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">
              Kanban Board
            </h3>

            <p className="text-gray-500">
              Move tasks through workflow stages and
              stay organized visually.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-3">
              Productivity Tracking
            </h3>

            <p className="text-gray-500">
              Track completed work and understand
              progress over time.
            </p>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section
        id="preview"
        className="max-w-7xl mx-auto px-8 py-20"
      >
        <h2 className="text-4xl font-bold text-center mb-14">
          Product Preview
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-6">
              Dashboard
            </h3>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="bg-yellow-50 rounded-2xl p-4">
                Total Tasks
              </div>

              <div className="bg-blue-50 rounded-2xl p-4">
                Active
              </div>

              <div className="bg-green-50 rounded-2xl p-4">
                Completed
              </div>
            </div>

            <div className="bg-[#F8F9FC] rounded-2xl p-4">
              Upcoming Tasks & Analytics
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-6">
              Kanban Board
            </h3>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-[#F8F9FC] rounded-2xl p-4">
                To Do
              </div>

              <div className="bg-[#F8F9FC] rounded-2xl p-4">
                In Progress
              </div>

              <div className="bg-[#F8F9FC] rounded-2xl p-4">
                Done
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="bg-black text-white rounded-[40px] p-14 text-center">
          <h2 className="text-4xl font-bold">
            Ready to Get Organized?
          </h2>

          <p className="text-gray-300 mt-4">
            Start managing your tasks more efficiently today.
          </p>

          <Link
            to="/register"
            className="inline-block mt-8 bg-white text-black px-8 py-4 rounded-2xl font-semibold"
          >
            Create Free Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="border-t border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-8 py-10 text-center">
          <h3 className="text-2xl font-bold">
            TaskFlow
          </h3>

          <p className="text-gray-500 mt-2">
            Modern Task Management Platform
          </p>

          <p className="text-gray-400 mt-6">
            © 2026 TaskFlow. Built with MERN Stack.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;