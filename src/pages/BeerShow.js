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
  let currentBeer = beers?.find((beer) => beer.id === +id);

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
      <div className="beer-show-title">How About This Beer?</div>
      <main className="beer-show-container">
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
                  {currentBeer.name}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Rating: {currentBeer.rating}
                </CardSubtitle>
                <CardText>{currentBeer.description}</CardText>
                <CardText>{currentBeer.location}</CardText>
                <NavLink to={`/BeerEdit/${currentBeer.id}`}>
                 <div className="edit-button">
                 <Button>Edit Review</Button>
                 </div>
                </NavLink>
                <Button onClick={toggleModal}>Delete Review</Button>
                <Modal isOpen={isModalOpen} toggle={toggleModal}>
                  <ModalBody>
                    Are you sure you want to delete this review?
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={handleDestroy}>Yes</Button>
                    <Button onClick={handleSubmit}>No</Button>
                  </ModalFooter>
                </Modal>
              </CardBody>
            </Card>
          </>
      </main>
    </>
  );
};

export default BeerShow;
