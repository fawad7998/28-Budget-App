import Container from "react-bootstrap/Container";
import { Stack, Button } from "react-bootstrap";
import BudgetCard from "./component/BudgetCard";

function App() {
  return (
    <Container className="my-4">
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">Budgets</h1>
        <Button variant="primary">Add Budget</Button>
        <Button variant="outline-primary">Add Expenses</Button>
      </Stack>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.1rem",
          alignItems: "flex-start"
        }}
      >
        <BudgetCard 
          name="React Course"
          amount={200}
          max={1000}
          gray
        />
      </div>
      
    </Container>

  );
}

export default App;
