import React from "react";
import './Project.css';
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  SimpleGrid,
  Text,
  Container,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { projects } from "../Constants/Constant";
import styled from "styled-components";

const Projects = ({ post, _id }) => {
    const TagList = styled.ul`
    display: flex;
    padding-left: 10px;
  `;
  const Tag = styled.li`
    padding-left: 12px;
    letter-spacing: 0.1rem;
    list-style: none;
    font-size: 0.7rem;
  `;
  const TitleContent = styled.div`
    text-align: center;
    padding: 0.7rem 10px 0 0.7rem;
    margin: 0 15px 0 15px;
    padding-right: 50%;
    width: 100%;
  `;
  const Hr = styled.hr`
    width: 75px;
    height: 4px;
    margin: 20px auto;
    border: 0;
    background: #ff0080;
  `;
return(
    <>
        <Divider></Divider>
            <Center id="projects" py={4}>
            <Text
          textTransform={"uppercase"}
          color={"blue.400"}
          fontWeight={600}
          fontSize={"sm"}
          bg={useColorModeValue("blue.50", "blue.900")}
          p={2}
          alignSelf={"flex-start"}
          rounded={"md"}
        >
          My Projects
        </Text>
            </Center>
            {/* <Divider></Divider> */}
            <Center py={2}>
        <Heading style={{ paddingLeft: 30 }}>
          <Text>Here are some of My Projects</Text>
        </Heading>
      </Center>
      {/* <hr></hr> */}
      <section className="porjm" id="about">
            {projects.map(
              ({ id, image, title, description, source, visit }) => (
                <div className="reveal card active">
                  <img src={image} alt={title} />
                  <div className="card-body">
                    <h6>{title}</h6>
                    <p>{description}</p>
                    <div>
                      <Stack
                        width={"100%"}
                        mt={"1rem"}
                        direction={"row"}
                        padding={1}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Button
                          flex={1}
                          fontSize={"sm"}
                          rounded={"full"}
                          _focus={{
                            bg: "gray.200",
                          }}
                          onClick={() => {
                            window.open(visit, "_blank");
                          }}
                        >
                          Visit
                        </Button>
                        
                      </Stack>
                    </div>
                  </div>
                </div>
              )
            )}
          </section>
    </>
);
};

export default Projects;