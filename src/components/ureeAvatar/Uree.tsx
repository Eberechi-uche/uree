"use client";

import { Info } from "@/app/uree/page";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { defaulInfo } from "../card/card";
type Ureeprops = {
  info: Info;
  setDetails: Dispatch<SetStateAction<Info>>;
  setActive: Dispatch<SetStateAction<number>>;
  setOpacity: Dispatch<SetStateAction<string>>;
};

export default function UreeAvatar(props: Ureeprops) {
  const [introduce, setIntroduce] = useState(false);
  useEffect(() => {
    if (introduce) setIntroduce(!introduce);
  }, [props.info.active]);
  return (
    <Flex
      pos={"fixed"}
      transition={"all 0.7s ease-in"}
      right={props.info.right}
      left={props.info.left}
      top={props.info.top}
      bottom={props.info.bottom}
      transform={props.info.active ? "translateY(80px)" : ""}
      minW={"max-content"}
      maxW={"fit-content"}
      flexWrap={"wrap"}
      zIndex={"4"}
      onClick={() => {
        if (!props.info.active) setIntroduce(!introduce);
      }}
    >
      {props.info.active && (
        <Flex
          p={"4"}
          borderRadius={"6"}
          w={"170px"}
          h={"170px"}
          flexDir={"column"}
          bg={"#fff"}
          justify={"space-between"}
          transition={"all 0.7s ease-in"}
        >
          <Text fontSize={"xs"}>{props.info.details}</Text>
          <Button
            size={"xs"}
            w={"80%"}
            onClick={() => {
              props.setDetails(defaulInfo);
              props.setOpacity("1");
              props.setActive(0);
            }}
            colorScheme={"blackAlpha"}
          >
            Done
          </Button>
        </Flex>
      )}
      {introduce && (
        <>
          <Text
            bg={"#fff"}
            color={"#000"}
            px={"4"}
            borderRadius={"full"}
            h={"min-content"}
            fontSize={"xs"}
          >
            Hello i am uree.
          </Text>
          <Image
            src={"/raisingHands.svg"}
            alt={"uree page assisstant"}
            boxSize={"60px"}
            transition={"all 0.7s ease-in"}
          />
        </>
      )}
      {!introduce && (
        <Image
          src={props.info.active ? "/awareState.svg" : "/ease.svg"}
          alt={"uree page assisstant"}
          boxSize={"70px"}
          transition={"all 0.7s ease-in"}
        />
      )}
    </Flex>
  );
}
