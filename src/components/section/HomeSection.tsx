import { Flex, Heading, Text, Image } from "@chakra-ui/react";

export default function HomeSection() {
  return (
    <Flex w={"100%"} justify={"center"} my={"16"} px={"6"}>
      <Flex
        w={"100%"}
        maxW={"1000px"}
        bg={"#cbf0f8"}
        h={"75dvh"}
        borderRadius={"24px"}
        flexDir={"column"}
        align={"center"}
        justify={"center"}
      >
        <Flex
          overflowX={"scroll"}
          w={"100%"}
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Flex>
            <SectionCard
              text="Interactive Element Descriptions - Instantly access detailed
        descriptions of elements on webpages with just a click, making your
        online experience more informative and engaging.
        "
            />
            <SectionCard
              text={
                "Seamless Navigation:  Navigate the web seamlessly as our assistant provides on-the-spot information about the content you encounter, ensuring you never miss important details."
              }
              img="/astronault.svg"
            />
            <SectionCard
              text={"Stays out of your way - silent and only there when needed"}
              img="/ninja.svg"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

function SectionCard({ text, img }: { text: string; img?: string }) {
  return (
    <Flex
      w={{
        base: "80vw",
        lg: "30vw",
      }}
      bg={"#fff"}
      h={"60vh"}
      borderRadius={"16px"}
      boxShadow={"md"}
      pos={"relative"}
      p={"6"}
      m={"4"}
      flexDir={"column"}
    >
      <Image
        src={`${img || "/awareState.svg"}`}
        boxSize={"55px"}
        objectFit={"cover"}
        my={"6"}
      />
      <Text
        fontSize={{
          base: "md",
          lg: "2xl",
        }}
        fontWeight={"300"}
      >
        {text}
      </Text>
    </Flex>
  );
}
