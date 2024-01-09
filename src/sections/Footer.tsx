
import React from "react";
import { useLocation } from "react-router-dom";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../utils/FirebaseConfig";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {  setPokemonTab, setToast, setUserstatus } from "../app/slices/AppSlice";
import { pokemonTabs } from "../utils/Constants";

export default function Footer() {
  const location = useLocation();
  
  const dispatch = useAppDispatch();
  const currentPokemonTab = useAppSelector(
    ({ app: { currentPokemonTab } }) => currentPokemonTab
  );
  const handleLogOut = () => {
    signOut(firebaseAuth);
    dispatch(setUserstatus(undefined));
    dispatch(setToast("Logged out successfully from Firebase"));
  };
  const routes = [
    {
      name: pokemonTabs.description,
      value: "Description",
    },
    {
      name: pokemonTabs.evolution,
      value: "Evolution",
    },
    {
      name: pokemonTabs.locations,
      value: "Catching",
    },
    {
      name: pokemonTabs.moves,
      value: "Capable Moves",
    },
  ];
  return (
    <footer>
      <div className="block"></div>
      <div className="data">

      {location.pathname.includes("/pokemon") && (
          <ul>
            {routes.map((route) => (
              <li
                key={route.name}
                className={`${
                  currentPokemonTab === route.name ? "active" : ""
                }`}
                onClick={() => {
                  dispatch(setPokemonTab(route.name))
                }}
              >
                {route.value}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="block">
        <MdOutlinePowerSettingsNew onClick={handleLogOut} />
      </div>
    </footer>
  );
}
