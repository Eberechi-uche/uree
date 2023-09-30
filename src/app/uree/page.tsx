"use client";

import { Card } from "@/components/card/card";
import UreeAvatar from "@/components/ureeAvatar/Uree";
import { Flex, Text } from "@chakra-ui/react";

import { useState } from "react";

export type Info = {
  left: string;
  right: string;
  top: string;
  bottom: string;
  details: string;
  active: boolean;
};

export const defaulInfo: Info = {
  right: "20px",
  top: "",
  bottom: "20px",
  left: "",
  details: "",

  active: false,
};
export default function Uree() {
  const [info, setInfo] = useState<Info>(defaulInfo);
  const [isActive, setIsActive] = useState(0);
  const [opacity, setOpacity] = useState("1");
  return (
    <Flex
      bg={"gray.700"}
      minH={"100dvh"}
      p={"6"}
      justify={"center"}
      pos={"relative"}
    >
      <Flex maxW={"1100px"} w={"100%"} flexDir={"column"}>
        <Text color={"#fafafa"}> Click on images to see quotes</Text>
        <Flex
          w={"100%"}
          flexWrap={{
            base: "wrap",
            lg: "nowrap",
          }}
        >
          <Card
            setDetails={setInfo}
            info="The only way to do great work is to love what you do.” – Steve Jobs, Apple co-founder (2005)"
            isActive={isActive}
            setActive={setIsActive}
            opacity={opacity}
            id={4}
            setOpacity={setOpacity}
            image="/stevejobs.jpeg"
          />
          <Card
            setDetails={setInfo}
            info="Others have seen what is and asked why. I have seen what could be and asked why not. - picasso"
            isActive={isActive}
            setActive={setIsActive}
            opacity={opacity}
            id={5}
            setOpacity={setOpacity}
            image="/picasso.jpeg"
          />
          <Card
            setDetails={setInfo}
            info="The best way to predict your future is to create it.” – Abraham Lincoln, former U.S. President (1863)"
            isActive={isActive}
            setActive={setIsActive}
            opacity={opacity}
            id={3}
            setOpacity={setOpacity}
            image="/abraham.jpeg"
          />
          <Card
            setDetails={setInfo}
            info="I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures."
            isActive={isActive}
            setActive={setIsActive}
            opacity={opacity}
            id={2}
            setOpacity={setOpacity}
            image="/lao.jpeg"
          />
          <Card
            setDetails={setInfo}
            info="Patience you must have, my young Padawan."
            isActive={isActive}
            setActive={setIsActive}
            opacity={opacity}
            id={9}
            setOpacity={setOpacity}
            image="/yoda.jpeg"
          />
        </Flex>
      </Flex>
      <UreeAvatar
        info={info}
        setDetails={setInfo}
        setOpacity={setOpacity}
        setActive={setIsActive}
      />
    </Flex>
  );
}
