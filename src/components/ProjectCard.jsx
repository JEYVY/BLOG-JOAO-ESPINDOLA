import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProjectCard(props) {
    const { projectImage, projectName, projectDesc, projectLink } = props;
    return (
        <div className='col-md-6'>
            <Card className="h-100 shadow">
                <a href={projectLink} target="_blank" rel="noopener noreferrer">
                    <Card.Img variant="top" src={projectImage} />
                </a>
                <Card.Body className='p-5'>
                    <Card.Title className="fw-bold text-uppercase mb-4 fs-3">{projectName}</Card.Title>
                    <Card.Text>{projectDesc}</Card.Text>
                    <a href={projectLink} target="_blank" rel="noopener noreferrer">
                        <Button className="shadow text-capitalize" variant="outline-primary">
                            View project
                        </Button>
                    </a>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProjectCard