export function OpportunitiesList() {
const opportunities = [
{ title: "Frontend Developer Intern", company: "Google" },
{ title: "Data Analyst Intern", company: "MTN Cameroon" },
{ title: "Software Engineer Trainee", company: "Oracle" }
];


return (
<div className="mt-8">
<h2 className="text-xl font-bold mb-3">Recommended Opportunities</h2>
<div className="grid grid-cols-2 gap-4">
{opportunities.map((item, index) => (
<Card key={index} className="shadow rounded-2xl p-4">
<h3 className="font-bold text-lg">{item.title}</h3>
<p className="text-gray-600">{item.company}</p>
<Button className="mt-3 w-full rounded-xl">Apply</Button>
</Card>
))}
</div>
</div>
);
}