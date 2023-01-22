import { useRouter } from "next/router";

export default function DetailsPage() {
  const router = useRouter();
  const newsId = router.query.newsId;
  console.log(newsId, "<===Have a look at this-====>");
  return <h1>THis is the Details page </h1>;
} 
