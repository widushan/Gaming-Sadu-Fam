// app/page.tsx
import Container from "@/components/ui/Container";

export default function HomePage() {
  return (
    <Container className="py-24">
      <h1>Welcome to <span className="text-gradient">Gaming Sadu Fam</span></h1>
      <p className="mt-4 max-w-2xl">
        Home page — hero section will be built here.
      </p>
    </Container>
  );
}