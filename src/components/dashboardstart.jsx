export function DashboardStats() {
return (
<div className="grid grid-cols-3 gap-4 mt-5">
<Card className="shadow-lg rounded-2xl">
<CardContent className="flex items-center gap-4 p-5">
<School className="w-10 h-10" />
<div>
<h2 className="text-xl font-bold">My School</h2>
<p className="text-gray-600">GBHS Ebolowa</p>
</div>
</CardContent>
</Card>


<Card className="shadow-lg rounded-2xl">
<CardContent className="flex items-center gap-4 p-5">
<Briefcase className="w-10 h-10" />
<div>
<h2 className="text-xl font-bold">Opportunities</h2>
<p className="text-gray-600">32 available</p>
</div>
</CardContent>
</Card>


<Card className="shadow-lg rounded-2xl">
<CardContent className="flex items-center gap-4 p-5">
<User className="w-10 h-10" />
<div>
<h2 className="text-xl font-bold">Profile Score</h2>
<p className="text-gray-600">78%</p>
</div>
</CardContent>
</Card>
</div>
);
}