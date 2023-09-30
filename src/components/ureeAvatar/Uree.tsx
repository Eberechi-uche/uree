"use client";

import { Info, defaulInfo } from "@/app/uree/page";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
type Ureeprops = {
  info: Info;
  setDetails: Dispatch<SetStateAction<Info>>;
  setActive: Dispatch<SetStateAction<number>>;
  setOpacity: Dispatch<SetStateAction<string>>;
};

export default function UreeAvatar(props: Ureeprops) {
  return (
    <Flex
      pos={"fixed"}
      transition={"all 0.7s ease-in"}
      right={props.info.right}
      left={props.info.left}
      top={props.info.top}
      bottom={props.info.bottom}
      transform={props.info.active ? "translateY(80px)" : ""}
      //   flexDir={"column"}

      minW={"max-content"}
      maxW={"fit-content"}
      //   minH={"200px"}
      flexWrap={"wrap"}
      zIndex={"4"}
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
      <Image
        src={props.info.active ? "/awareState.svg" : "/ease.svg"}
        alt={"uree page assisstant"}
        boxSize={"70px"}
        transition={"all 0.7s ease-in"}
      />
    </Flex>
  );
}
