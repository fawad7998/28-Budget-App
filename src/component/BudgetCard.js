import { Card, ProgressBar, Stack, Button } from "react-bootstrap"
import { currencyFormater } from '../util.js';

export default function BudgetCard({ name, amount, max, gray }) {

    const className = [];

    if(amount > max){
        className.push('bg-danger', 'bg-opacity-10')
    }else if(gray){
        className.push('bg-light')
    }
  
    return (
        <Card className={className.join(' ')}>
            <Card.Body>
                <Card.Title className="d-flex justify-content-between 
              align-items-baseline fw-normal mb-3">
                    <div className="me-2">{name}</div>
                    <div className="d-flex align-items-baseline">
                        {currencyFormater.format(amount)}
                        <span className="fs-6 text-muted ms-1">
                            / {currencyFormater.format(max)}
                        </span>
                    </div>
                </Card.Title>
                <ProgressBar 
                    className="rounded-pill"
                    variant={getProgress(amount, max)}
                    min={0}
                    max={max}
                    now={amount}
                />
                <Stack direction="horizontal" gap="2" className="mt-4">
                    <Button className="ms-auto" variant="outline-primary">Add Expenses</Button>
                    <Button variant="outline-secondary">View Expenses</Button>
                </Stack>
            </Card.Body>
        </Card>
    );
}

function getProgress(amount, max){
    const ratio = amount/max;
    if(ratio < 0.5) return "primary"
    if(ratio < 0.75) return "warning"
    return "danger"
}