import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

export default function HomeHeader() {
  return (
    <>
      <Flex
        bgGradient="linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%)"
        p={"12"}
        w={"100vw"}
        justify={"center"}
        minH={"70vh"}
      >
        <Flex
          color={"#fff"}
          w={"100%"}
          maxW={"1100px"}
          flexWrap={{
            base: "wrap",
            lg: "nowrap",
          }}
          align={"center"}
        >
          <Flex
            w={{
              base: "100%",
              lg: "50%",
            }}
            flexDir={"column"}
          >
            <Heading>Meet uree your webpage assistant</Heading>
            <Text> Explore with clarity, click and discover</Text>
            <Link href={"/uree"}>
              <Box
                my={"6"}
                p={"4"}
                w={{
                  base: "70%",
                  lg: "50%",
                }}
                fontSize={{
                  base: "xs",
                  lg: "sm",
                }}
                bg={"#2ca5ce"}
                color={"#fff"}
                borderRadius={"full"}
                fontWeight={"600"}
                cursor={"pointer"}
                boxShadow={"base"}
              >
                See uree in action
              </Box>
            </Link>
          </Flex>
          <Flex
            w={{
              base: "100%",
              lg: "50%",
            }}
            h={"100%"}
          >
            <HomeHeaderLHS />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

function HomeHeaderLHS() {
  return (
    <Flex
      w={"100%"}
      pos={"relative"}
      h={{
        base: "300px",
        lg: "400px",
      }}
      mt={{
        base: "10",
        lg: "none",
      }}
    >
      <Flex w={"100%"}>
        <InfoCard left="35%" text="hello i'm  uree" img="/awareState.svg" />
        <InfoCard bottom="30%" text="i go anywhere" img="/astronault.svg" />
        <InfoCard
          right="0"
          bottom="30%"
          text=" info with a click"
          img="/ease.svg"
        />
        <InfoCard
          left="35%"
          bottom="0"
          text="always here"
          img="/raisingHands.svg"
        />
      </Flex>
    </Flex>
  );
}

type InfoCardProps = {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  text: string;
  img: string;
};
function InfoCard(props: InfoCardProps) {
  return (
    <Flex pos={"absolute"} {...props} flexDir={"column"}>
      <Flex pos={"relative"}>
        <Text
          bg={"#fff"}
          py={"2"}
          px={"4"}
          color={"#000"}
          borderRadius={"full"}
          //   opacity={"0"}
          _hover={{
            opacity: "1",
          }}
          my={"2"}
          transition={"opacity 0.5s ease-in-out"}
          pos={"absolute"}
          left={"-10px"}
          fontSize={"xs"}
          minW={"150px"}
        >
          {props.text}
        </Text>
      </Flex>

      <Image
        src={props.img}
        boxSize={{
          base: "24",
          lg: "32",
        }}
        border={"4px solid"}
        borderRadius={"full"}
        objectFit={"cover"}
        p={"none"}
        bg={"#cbf0f8"}
      />
    </Flex>
  );
}
