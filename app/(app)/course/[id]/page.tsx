import CourseDetailClient from "./CourseDetailClient";

export async function generateStaticParams() {
  // Return the dummy IDs that we link to across the app. In a real app, this would fetch from a database.
  return [
    { id: "c1" }, 
    { id: "c2" }, 
    { id: "c3" }, 
    { id: "t1" }, 
    { id: "t2" }
  ];
}

export default function CourseDetail() {
  return <CourseDetailClient />;
}
