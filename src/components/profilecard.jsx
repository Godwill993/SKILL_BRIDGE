export function ProfileCard() {
return (
<Card className="w-full shadow-xl rounded-2xl p-5 mt-8">
<h2 className="text-xl font-bold">My Profile</h2>
<p className="text-gray-600 mt-2">Lendzele Fritz</p>
<p className="text-gray-600">Computer Science Student</p>
<Button className="mt-4 rounded-xl w-full">Edit Profile</Button>
</Card>
);
}