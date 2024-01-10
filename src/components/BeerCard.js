import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import { NavLink } from "react-router-dom"

const BeerCard = ({ beer, index }) => {
  return (
    <Card
      color="light"
      style={{
        width: "18rem",
      }}
      key={index}
    >
      <img alt="beer profile" src={beer.image} />
      <CardBody>
        <CardTitle tag="h4">{beer.name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {beer.rating}
        </CardSubtitle>

        <NavLink to={`/BeerShow/${beer.id}`} className="nav-link">
          Details
        </NavLink>
      </CardBody>
    </Card>
  )
}

export default BeerCard