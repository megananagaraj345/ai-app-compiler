"use client";

import { useState } from "react";

export default function RuntimePreview({ schema, appType }: any) {

  const crmTabs = ["login", "dashboard", "contacts"];

  const ecommerceTabs = ["products", "cart", "checkout"];

  const hospitalTabs = ["patients", "appointments"];

  const lmsTabs = ["courses", "students"];

  let tabs = crmTabs;

  if (appType === "ecommerce") {
    tabs = ecommerceTabs;
  }

  else if (appType === "hospital") {
    tabs = hospitalTabs;
  }

  else if (appType === "lms") {
    tabs = lmsTabs;
  }

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const [loggedIn, setLoggedIn] = useState(false);

  /* CRM */

  const [contacts, setContacts] = useState([
    {
      name: "John Doe",
      email: "john@example.com"
    },
    {
      name: "Sarah Smith",
      email: "sarah@example.com"
    }
  ]);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  /* Ecommerce */

  const [cart, setCart] = useState<any[]>([]);

  const products = [
    {
      name: "MacBook Pro",
      price: 1999
    },
    {
      name: "iPhone 15",
      price: 999
    }
  ];

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  /* Hospital */

  const [appointments, setAppointments] = useState([
    {
      patient: "John Doe",
      doctor: "Dr. Smith"
    }
  ]);

  const [patientName, setPatientName] = useState("");

  const [doctorName, setDoctorName] = useState("");

  /* LMS */

  const [courses, setCourses] = useState([
    "AI Course",
    "Machine Learning"
  ]);

  const [students, setStudents] = useState([
    "Megana",
    "Alex"
  ]);

  const [courseName, setCourseName] = useState("");

  const [studentName, setStudentName] = useState("");

  return (

    <div className="bg-zinc-900/60 border border-zinc-800 p-8 rounded-3xl">

      {/* Tabs */}

      <div className="flex gap-4 mb-8 flex-wrap">

        {tabs.map((tab) => (

          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 rounded-2xl font-semibold capitalize transition-all ${
              activeTab === tab
                ? "bg-blue-600"
                : "bg-zinc-800 hover:bg-zinc-700"
            }`}
          >
            {tab}
          </button>

        ))}

      </div>

      {/* CRM LOGIN */}

      {appType === "crm" && activeTab === "login" && (

        <div className="bg-black/40 border border-zinc-700 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            Login Page
          </h2>

          <div className="space-y-5">

            <input
              type="email"
              placeholder="Enter email"
              className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
            />

            <input
              type="password"
              placeholder="Enter password"
              className="w-full p-4 rounded-xl bg-zinc-900 border border-zinc-700"
            />

            <button
              onClick={() => setLoggedIn(true)}
              className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all px-8 py-4 rounded-xl font-semibold"
            >
              Login
            </button>

            {loggedIn && (

              <div className="bg-green-600/20 border border-green-500 text-green-400 p-4 rounded-2xl mt-4">

                Login Successful ✅

              </div>

            )}

          </div>

        </div>

      )}

      {/* CRM DASHBOARD */}

      {appType === "crm" && activeTab === "dashboard" && (

        <div className="bg-black/40 border border-zinc-700 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            Dashboard
          </h2>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-zinc-900 p-6 rounded-2xl">

              <p className="text-zinc-400">
                Revenue
              </p>

              <h3 className="text-4xl font-bold mt-3">
                $12,400
              </h3>

            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl">

              <p className="text-zinc-400">
                Users
              </p>

              <h3 className="text-4xl font-bold mt-3">
                {contacts.length}
              </h3>

            </div>

          </div>

        </div>

      )}

      {/* CRM CONTACTS */}

      {appType === "crm" && activeTab === "contacts" && (

        <div className="bg-black/40 border border-zinc-700 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8">
            Contacts
          </h2>

          <div className="space-y-5">

            <div className="bg-zinc-900 p-6 rounded-2xl space-y-4">

              <input
                type="text"
                placeholder="Contact Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 rounded-xl bg-black/40 border border-zinc-700"
              />

              <input
                type="email"
                placeholder="Contact Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 rounded-xl bg-black/40 border border-zinc-700"
              />

              <button
                onClick={() => {

                  if (!name || !email) return;

                  setContacts([
                    ...contacts,
                    {
                      name,
                      email
                    }
                  ]);

                  setName("");
                  setEmail("");
                }}
                className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all px-6 py-3 rounded-xl font-semibold"
              >
                Add Contact
              </button>

            </div>

            {contacts.map((contact, index) => (

              <div
                key={index}
                className="bg-zinc-900 p-5 rounded-2xl flex items-center justify-between"
              >

                <div>

                  <h3 className="font-bold text-lg">
                    {contact.name}
                  </h3>

                  <p className="text-zinc-400">
                    {contact.email}
                  </p>

                </div>

                <button
                  onClick={() => {

                    setContacts(
                      contacts.filter((_, i) => i !== index)
                    );
                  }}
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl"
                >
                  Delete
                </button>

              </div>

            ))}

          </div>

        </div>

      )}

      {/* ECOMMERCE */}

      {appType === "ecommerce" && (

        <div className="bg-black/40 border border-zinc-700 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8 capitalize">
            {activeTab}
          </h2>

          {activeTab === "products" && (

            <div className="grid grid-cols-2 gap-6">

              {products.map((product, index) => (

                <div
                  key={index}
                  className="bg-zinc-900 p-6 rounded-2xl space-y-4"
                >

                  <h3 className="text-2xl font-bold">
                    {product.name}
                  </h3>

                  <p className="text-zinc-400">
                    ${product.price}
                  </p>

                  <button
                    onClick={() => setCart([...cart, product])}
                    className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all px-5 py-3 rounded-xl font-semibold"
                  >
                    Add to Cart
                  </button>

                </div>

              ))}

            </div>

          )}

          {activeTab === "cart" && (

            <div className="space-y-5">

              {cart.length === 0 && (

                <div className="bg-zinc-900 p-6 rounded-2xl">
                  Cart is empty
                </div>

              )}

              {cart.map((item, index) => (

                <div
                  key={index}
                  className="bg-zinc-900 p-5 rounded-2xl flex items-center justify-between"
                >

                  <div>

                    <h3 className="font-bold">
                      {item.name}
                    </h3>

                    <p className="text-zinc-400">
                      ${item.price}
                    </p>

                  </div>

                  <button
                    onClick={() => {

                      setCart(
                        cart.filter((_, i) => i !== index)
                      );
                    }}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl"
                  >
                    Remove
                  </button>

                </div>

              ))}

            </div>

          )}

          {activeTab === "checkout" && (

            <div className="space-y-6">

              <div className="bg-zinc-900 p-8 rounded-2xl">

                <p className="text-zinc-400 mb-3">
                  Total Amount
                </p>

                <h3 className="text-5xl font-black">
                  ${total}
                </h3>

              </div>

              <button
                onClick={() => alert("Payment Successful ✅")}
                className="bg-green-600 hover:bg-green-700 hover:scale-105 transition-all px-8 py-4 rounded-2xl font-bold text-lg"
              >
                Pay Now
              </button>

            </div>

          )}

        </div>

      )}

      {/* HOSPITAL */}

      {appType === "hospital" && (

        <div className="bg-black/40 border border-zinc-700 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8 capitalize">
            {activeTab}
          </h2>

          {activeTab === "patients" && (

            <div className="space-y-5">

              <div className="bg-zinc-900 p-6 rounded-2xl space-y-4">

                <input
                  type="text"
                  placeholder="Patient Name"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full p-4 rounded-xl bg-black/40 border border-zinc-700"
                />

                <input
                  type="text"
                  placeholder="Doctor Name"
                  value={doctorName}
                  onChange={(e) => setDoctorName(e.target.value)}
                  className="w-full p-4 rounded-xl bg-black/40 border border-zinc-700"
                />

                <button
                  onClick={() => {

                    if (!patientName || !doctorName) return;

                    setAppointments([
                      ...appointments,
                      {
                        patient: patientName,
                        doctor: doctorName
                      }
                    ]);

                    setPatientName("");
                    setDoctorName("");
                  }}
                  className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all px-6 py-3 rounded-xl font-semibold"
                >
                  Add Appointment
                </button>

              </div>

              {appointments.map((appointment, index) => (

                <div
                  key={index}
                  className="bg-zinc-900 p-5 rounded-2xl flex items-center justify-between"
                >

                  <div>

                    <h3 className="font-bold text-lg">
                      {appointment.patient}
                    </h3>

                    <p className="text-zinc-400">
                      {appointment.doctor}
                    </p>

                  </div>

                  <button
                    onClick={() => {

                      setAppointments(
                        appointments.filter((_, i) => i !== index)
                      );
                    }}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl"
                  >
                    Remove
                  </button>

                </div>

              ))}

            </div>

          )}

          {activeTab === "appointments" && (

            <div className="space-y-5">

              {appointments.map((appointment, index) => (

                <div
                  key={index}
                  className="bg-zinc-900 p-6 rounded-2xl"
                >

                  <h3 className="text-xl font-bold">
                    {appointment.patient}
                  </h3>

                  <p className="text-zinc-400 mt-2">
                    Assigned to {appointment.doctor}
                  </p>

                </div>

              ))}

            </div>

          )}

        </div>

      )}

      {/* LMS */}

      {appType === "lms" && (

        <div className="bg-black/40 border border-zinc-700 rounded-3xl p-8">

          <h2 className="text-3xl font-bold mb-8 capitalize">
            {activeTab}
          </h2>

          {/* COURSES */}

          {activeTab === "courses" && (

            <div className="space-y-5">

              <div className="bg-zinc-900 p-6 rounded-2xl space-y-4">

                <input
                  type="text"
                  placeholder="Course Name"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                  className="w-full p-4 rounded-xl bg-black/40 border border-zinc-700"
                />

                <button
                  onClick={() => {

                    if (!courseName) return;

                    setCourses([
                      ...courses,
                      courseName
                    ]);

                    setCourseName("");
                  }}
                  className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all px-6 py-3 rounded-xl font-semibold"
                >
                  Add Course
                </button>

              </div>

              {courses.map((course, index) => (

                <div
                  key={index}
                  className="bg-zinc-900 p-5 rounded-2xl flex items-center justify-between"
                >

                  <p className="font-semibold">
                    {course}
                  </p>

                  <button
                    onClick={() => {

                      setCourses(
                        courses.filter((_, i) => i !== index)
                      );
                    }}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl"
                  >
                    Remove
                  </button>

                </div>

              ))}

            </div>

          )}

          {/* STUDENTS */}

          {activeTab === "students" && (

            <div className="space-y-5">

              <div className="bg-zinc-900 p-6 rounded-2xl space-y-4">

                <input
                  type="text"
                  placeholder="Student Name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full p-4 rounded-xl bg-black/40 border border-zinc-700"
                />

                <button
                  onClick={() => {

                    if (!studentName) return;

                    setStudents([
                      ...students,
                      studentName
                    ]);

                    setStudentName("");
                  }}
                  className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all px-6 py-3 rounded-xl font-semibold"
                >
                  Add Student
                </button>

              </div>

              {students.map((student, index) => (

                <div
                  key={index}
                  className="bg-zinc-900 p-5 rounded-2xl flex items-center justify-between"
                >

                  <p className="font-semibold">
                    {student}
                  </p>

                  <button
                    onClick={() => {

                      setStudents(
                        students.filter((_, i) => i !== index)
                      );
                    }}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl"
                  >
                    Remove
                  </button>

                </div>

              ))}

            </div>

          )}

        </div>

      )}

    </div>
  );
}