//components/Team.jsx
import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import "./Team.css"

// Import your team member images
import member1 from "../assets/images/team/member1.jpg"
import member2 from "../assets/images/team/member2.jpg"
import member3 from "../assets/images/team/member3.jpg"
import member4 from "../assets/images/team/member4.jpg"

const teamData = [
  {
    name: "Yusuf Lawal S.",
    title: "Founder & CEO",
    imageUrl: member1,
    bio: "Visionary leader with 10+ years in software development",
  },
  {
    name: "Ava Smith",
    title: "Technical Lead",
    imageUrl: member2,
    bio: "Expert in full-stack architecture and system design",
  },
  {
    name: "Brenda Reyes",
    title: "Head of Mobile",
    imageUrl: member3,
    bio: "Specialized in cross-platform mobile development",
  },
  {
    name: "Arjun Sharma",
    title: "Head of Solutions",
    imageUrl: member4,
    bio: "Strategic consultant and client success advocate",
  },
]

function Team() {
  return (
    <div className="team-section-wrapper">
      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="team-title fw-bold">Meet Our Expert Team</h2>
          <p className="team-subtitle">
            A dedicated group of professionals committed to delivering
            excellence in every project. From concept to deployment, we're here
            to make your vision a reality.
          </p>
        </div>
        <Row>
          {teamData.map((member, index) => (
            <Col md={6} lg={3} key={index} className="text-center mb-4">
              <div className="team-member-card">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  className="team-member-image"
                  loading="lazy"
                />
                <h4 className="mt-3 mb-1 fw-bold team-member-name">
                  {member.name}
                </h4>
                <p className="team-member-title">{member.title}</p>
                <p className="team-member-bio">{member.bio}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Team
