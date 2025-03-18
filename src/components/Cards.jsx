import { useEffect, useState } from "react";
import { FaEnvelope, FaBuilding, FaUser, FaIdBadge } from "react-icons/fa";

export default function Cards() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-100 to-sky-100">
      <section className="py-12 px-6 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {loading ? (
          <p className="text-center col-span-3">Loading users...</p>
        ) : error ? (
          <p className="text-center col-span-3 text-red-600">{error}</p>
        ) : (
          users.map((user) => (
            <div key={user.id} className="p-6 cursor-pointer bg-white shadow-lg rounded-xl text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="text-blue-600  text-4xl mb-4 ">
                <FaUser className="border mx-auto rounded-full" />
              </div>
              <h3 className="text-xl font-bold">{user.name}</h3>
              <p className="text-gray-500 flex items-center justify-center gap-2 mt-2">
                <FaIdBadge className="text-blue-500" /> ID: {user.id}
              </p>
              <p className="text-gray-600 mt-2 flex items-center justify-center gap-2">
                <FaEnvelope className="text-blue-500" /> {user.email}
              </p>
              <p className="text-gray-500 flex items-center justify-center gap-2 mt-1">
                <FaBuilding className="text-blue-500" /> {user.company.name}
              </p>
            </div>
          ))
        )}
      </section>
    </div>
  );
}
