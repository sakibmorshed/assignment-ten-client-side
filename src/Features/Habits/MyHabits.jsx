import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const MyHabits = () => {
  const { user } = useContext(AuthContext);
  const [myHabits, setMyHabits] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://habit-server-app.vercel.app/myHabits?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyHabits(data);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-primary w-30"></span>
        <span className="loading loading-spinner text-primary w-30"></span>
      </div>
    );
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://habit-server-app.vercel.app/allHabits/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            setMyHabits(myHabits.filter((habit) => habit._id !== id));
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto my-10 p-5">
      <h1 className="text-2xl font-bold mb-5 text-center">My Habits</h1>

      {myHabits.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven’t added any habits yet.Please add your habits
        </p>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="table w-full text-sm sm:text-base">
            <thead className="bg-base-200 text-center text-xs sm:text-sm">
              <tr>
                <th>Title</th>
                <th>Category</th>
                <th>Current Streak</th>
                <th>Created Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody className="text-center">
              {myHabits.map((habit) => (
                <tr key={habit._id}>
                  <td className="font-semibold p-3">{habit.habitTitle}</td>
                  <td>{habit.category}</td>

                  <td>Current streak</td>
                  <td>
                    {habit.createdAt
                      ? new Date(habit.createdAt).toLocaleDateString()
                      : "N/A"}
                  </td>
                  <td className="flex flex-col sm:flex-row gap-2  space-x-2">
                    <Link
                      to={`/updateHabit/${habit._id}`}
                      className="btn btn-xs sm:btn-sm btn-info text-white"
                    >
                      Update
                    </Link>

                    <button
                      onClick={() => handleDelete(habit._id)}
                      className="btn btn-xs sm:btn-sm btn-error text-white"
                    >
                      Delete
                    </button>

                    <button className="btn btn-xs sm:btn-sm btn-success text-white">
                      Mark Complete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyHabits;
