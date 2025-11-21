import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, School, User, Bell } from "lucide-react";


export function Sidebar() {
return (
<div className="w-64 h-screen bg-gray-900 text-white p-5 flex flex-col gap-4">
<h1 className="text-2xl font-bold">StudentHub</h1>
<nav className="flex flex-col gap-3">
<a className="hover:bg-gray-700 p-2 rounded-xl cursor-pointer">Dashboard</a>
<a className="hover:bg-gray-700 p-2 rounded-xl cursor-pointer">Internships</a>
<a className="hover:bg-gray-700 p-2 rounded-xl cursor-pointer">Companies</a>
<a className="hover:bg-gray-700 p-2 rounded-xl cursor-pointer">My School</a>
<a className="hover:bg-gray-700 p-2 rounded-xl cursor-pointer">Profile</a>
</nav>
</div>
);
}