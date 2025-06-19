"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaEdit, FaTrashAlt, FaUserPlus } from "react-icons/fa";

export default function AllUsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [addingUser, setAddingUser] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/profiles");
      const result = await res.json();
      setUsers(result.data || result);
    } catch (err) {
      console.error("Failed to fetch users:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setForm({ name: user.name, email: user.email, password: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const res = await fetch(`/api/users/${editingUser.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Update failed");

      await Swal.fire("Updated!", "User has been updated.", "success");
      setEditingUser(null);
      fetchUsers();
    } catch (err) {
      console.error("Update error:", err);
      Swal.fire("Oops!", "Something went wrong while updating!", "error");
    }
  };

  const handleDelete = async (userId) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        const res = await fetch(`/api/users/${userId}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Delete failed");
        await Swal.fire("Deleted!", "User has been deleted.", "success");
        fetchUsers();
      } catch (err) {
        console.error("Delete error:", err);
        Swal.fire("Error!", "Something went wrong while deleting.", "error");
      }
    }
  };

  const handleAddUser = async () => {
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        return Swal.fire("Error!", data.error || "Could not add user", "error");
      }

      await Swal.fire("Success!", "User added successfully.", "success");
      setAddingUser(false);
      setForm({ name: "", email: "", password: "" });
      fetchUsers();
    } catch (err) {
      console.error("Add error:", err);
      Swal.fire("Error!", "Something went wrong while adding!", "error");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Users</h1>
      <button
        onClick={() => {
          setAddingUser(true);
          setForm({ name: "", email: "", password: "" });
        }}
        style={{
          marginBottom: "15px",
          padding: "8px 16px",
          backgroundColor: "#2196f3",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        <FaUserPlus style={{ marginRight: "8px" }} />
        Add User
      </button>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th style={cellStyle}>ID</th>
              <th style={cellStyle}>Name</th>
              <th style={cellStyle}>Email</th>
              <th style={cellStyle}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td style={cellStyle}>{user.id}</td>
                <td style={cellStyle}>{user.name}</td>
                <td style={cellStyle}>{user.email}</td>
                <td style={cellStyle}>
                  <button
                    onClick={() => handleEdit(user)}
                    style={iconButtonStyle}
                    title="Edit"
                  >
                    <FaEdit size={18} color="#4caf50" />
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    style={iconButtonStyle}
                    title="Delete"
                  >
                    <FaTrashAlt size={18} color="#f44336" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {(editingUser || addingUser) && (
        <div style={overlayStyle}>
          <div style={formBoxStyle}>
            <h3 style={{ marginBottom: "15px" }}>
              {editingUser
                ? `Update User (ID: ${editingUser.id})`
                : "Add New User"}
            </h3>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="Name"
              onChange={handleChange}
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="Email"
              onChange={handleChange}
              style={inputStyle}
            />
            <input
              type="password"
              name="password"
              value={form.password}
              placeholder="Password"
              onChange={handleChange}
              style={inputStyle}
            />
            <div style={{ marginTop: "10px" }}>
              <button
                onClick={editingUser ? handleUpdate : handleAddUser}
                style={{ marginRight: "10px" }}
              >
                {editingUser ? "Update" : "Add"}
              </button>
              <button
                onClick={() => {
                  setEditingUser(null);
                  setAddingUser(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Styles
const cellStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
};

const inputStyle = {
  display: "block",
  marginBottom: "10px",
  padding: "8px",
  width: "100%",
};

const overlayStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  zIndex: 1000,
};

const formBoxStyle = {
  backgroundColor: "#fff",
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
  width: "400px",
  maxWidth: "90%",
  textAlign: "center",
};

const iconButtonStyle = {
  background: "none",
  border: "none",
  cursor: "pointer",
  marginRight: "10px",
};
