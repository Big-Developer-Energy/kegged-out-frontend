import React, { useState } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const BeerShow = ({ beers, destroyBeer }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  let currentBeer = beers.find((beer) => beer.id === +id);
  console.log(currentBeer);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSubmit = () => {
    toggleModal();
  };

  const handleDestroy = () => {
    destroyBeer(id);
    navigate("/BeerIndex");
    toggleModal();
  };

  return (
    <>
      <div>BeerShow</div>
      <main>
        {currentBeer && (
          <>
            <Card
              style={{
                width: "18rem",
              }}
            >
              <img
                alt={`profile of beer named ${currentBeer.name}`}
                src={currentBeer.image}
              />
              <CardBody>
                <CardTitle tag="h5" CardTitle>
                  Name: {currentBeer.name}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Rating: {currentBeer.rating}
                </CardSubtitle>
                <CardText>Description: {currentBeer.description}</CardText>
                <CardText>Location: {currentBeer.location}</CardText>
                <NavLink to={`/BeerEdit/${currentBeer.id}`}>
                 <button>Edit Review</button>
                </NavLink>

                <button onClick={toggleModal}>Delete Review</button>
                <Modal isOpen={isModalOpen} toggle={toggleModal}>
                  <ModalBody>
                    Are you sure you want to delete this review?
                  </ModalBody>
                  <ModalFooter>
                    <button onClick={handleDestroy}>yes</button>{" "}
                    <button onClick={handleSubmit}>No</button>
                  </ModalFooter>
                </Modal>
              </CardBody>
            </Card>
          </>
        )}
      </main>
    </>
  );
};

export default BeerShow;
