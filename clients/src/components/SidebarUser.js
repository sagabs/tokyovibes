import React from "react";
import { Link } from "react-router-dom";
const SidebarUser = () => {
  const namaUser = "Ichigaya Naruto Al Kadzab";
  return (
    <div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"></li>
        <Link to="/userProfile">{namaUser}</Link>
        <li class="list-group-item"></li>
        <li class="list-group-item">
          <Link to="/">Home</Link>
        </li>
        <li class="list-group-item">
          <Link to="/userProfil">Profil Saya</Link>
        </li>

        <li class="list-group-item">
          <Link to="/setting">Pengaturan</Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarUser;
