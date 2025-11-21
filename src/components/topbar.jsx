export function Topbar() {
return (
<div className="w-full flex justify-between items-center p-4 bg-white shadow-md">
<input
type="text"
placeholder="Search opportunities..."
className="border p-2 rounded-xl w-1/3"
/>
<div className="flex gap-4 items-center">
<Bell className="w-6 h-6" />
<User className="w-7 h-7" />
</div>
</div>
);
}