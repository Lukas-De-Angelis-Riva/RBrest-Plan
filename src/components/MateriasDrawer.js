import {
  CalendarIcon,
  ChatIcon,
  CheckIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Icon,
  IconButton,
  Link,
  Tag,
  TagLabel,
  TagRightIcon,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { DataContext } from "../Context";
import SelectCarreras from "./SelectCarreras";
import SelectCurso from "./SelectCurso";
import SelectMateria from "./SelectMateria";

const MateriasDrawer = (props) => {
  const { useAgenda, setUseAgenda, isOpen, onClose } = props;
  const { data } = React.useContext(DataContext);

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent bg="drawerbg">
        <DrawerBody
          style={{
            overflowY: "auto",
            scrollbarWidth: "none",
          }}
        >
          <Box textAlign={["right"]}>
            <SelectCarreras />
            {data.materias
              .filter((m) => m.visible)
              .map((m) => (
                <SelectCurso materia={m} />
              ))}
            {data.materias.filter((m) => m.show).length !== 0 && (
              <SelectMateria />
            )}
          </Box>
        </DrawerBody>
        <DrawerFooter flex row justifyContent="space-between">
          <Tooltip label="Cambiar vista" placement="top">
            <IconButton
              variant="outline"
              colorScheme="primary"
              icon={<CalendarIcon />}
              onClick={() => setUseAgenda(!useAgenda)}
            />
          </Tooltip>

          <Box textAlign="right">
            <Tooltip
              label={`${useColorModeValue("Dark", "Light")} theme`}
              placement="top"
            >
              <Link
                color="#b881ee"
                // onClick={toggleColorMode}
              >
                {useColorModeValue(<MoonIcon />, <SunIcon />)}
              </Link>
            </Tooltip>

            <Tooltip label="FIUBA-Map" placement="top">
              <Link isExternal href="https://fede.dm/FIUBA-Map/">
                <Icon boxSize={5} ml={2} viewBox="0 0 448 512">
                  <path
                    fill="#b881ee"
                    d="M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"
                  />
                </Icon>
              </Link>
            </Tooltip>

            <Tooltip label="FdelMazo/FIUBA-Plan" placement="top">
              <Link
                isExternal
                color={useColorModeValue("text", "textdark")}
                href="https://github.com/fdelmazo/FIUBA-Plan"
              >
                <Icon boxSize={5} ml={2} viewBox="0 0 16 16">
                  <path
                    fill="#b881ee"
                    d="M7.999,0.431c-4.285,0-7.76,3.474-7.76,7.761 c0,3.428,2.223,6.337,5.307,7.363c0.388,0.071,0.53-0.168,0.53-0.374c0-0.184-0.007-0.672-0.01-1.32 c-2.159,0.469-2.614-1.04-2.614-1.04c-0.353-0.896-0.862-1.135-0.862-1.135c-0.705-0.481,0.053-0.472,0.053-0.472 c0.779,0.055,1.189,0.8,1.189,0.8c0.692,1.186,1.816,0.843,2.258,0.645c0.071-0.502,0.271-0.843,0.493-1.037 C4.86,11.425,3.049,10.76,3.049,7.786c0-0.847,0.302-1.54,0.799-2.082C3.768,5.507,3.501,4.718,3.924,3.65 c0,0,0.652-0.209,2.134,0.796C6.677,4.273,7.34,4.187,8,4.184c0.659,0.003,1.323,0.089,1.943,0.261 c1.482-1.004,2.132-0.796,2.132-0.796c0.423,1.068,0.157,1.857,0.077,2.054c0.497,0.542,0.798,1.235,0.798,2.082 c0,2.981-1.814,3.637-3.543,3.829c0.279,0.24,0.527,0.713,0.527,1.437c0,1.037-0.01,1.874-0.01,2.129 c0,0.208,0.14,0.449,0.534,0.373c3.081-1.028,5.302-3.935,5.302-7.362C15.76,3.906,12.285,0.431,7.999,0.431z"
                  />
                </Icon>
              </Link>
            </Tooltip>

            <Tooltip label="Invitame un Cafecíto" placement="top">
              <Link
                isExternal
                color={useColorModeValue("text", "textdark")}
                href="https://cafecito.app/fdelmazo"
              >
                <Icon boxSize={5} ml={2} viewBox="0 0 512 512">
                  <path
                    fill="#b881ee"
                    d="M127.1 146.5c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C111.8 5.9 105 0 96.8 0H80.4C70.6 0 63 8.5 64.1 18c3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zm112 0c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C223.8 5.9 217 0 208.8 0h-16.4c-9.8 0-17.5 8.5-16.3 18 3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zM400 192H32c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.8 0 112-50.2 112-112s-50.2-112-112-112zm0 160h-16v-96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48z"
                  />
                </Icon>
              </Link>
            </Tooltip>

            <Box>
              <Tag
                mt={2}
                variant="subtle"
                cursor="pointer"
                bg="#cba2f3"
                onClick={() => {
                  // toast.close(bugToast.current);
                  // return (bugToast.current = toast({
                  //   render: (props) => (
                  //     <Alert
                  //       borderRadius={6}
                  //       p={5}
                  //       mb="4em"
                  //       borderColor={
                  //         colorMode === "dark" ? "electivas.400" : "electivas.500"
                  //       }
                  //       borderWidth={2}
                  //       bg={colorMode === "dark" ? "gray.700" : "gray.50"}
                  //       color={colorMode === "dark" ? "textdark" : "text"}
                  //     >
                  //       <Box flex="1">
                  //         <AlertTitle>Hola!</AlertTitle>
                  //         <AlertDescription px={5} display="block">
                  //           <Text>
                  //             Si encontras algo feo, incorrecto, lento, erroneo...
                  //             me decís?
                  //           </Text>
                  //           <Text>
                  //             Si ves algo que te gustó, o tenes alguna sugerencia,
                  //             también!
                  //           </Text>
                  //           <Text>
                  //             Si querés que te responda, escribí tu
                  //             mail/telegram/algo.
                  //           </Text>
                  //           <form
                  //             onSubmit={(t) => {
                  //               t.preventDefault();
                  //               submitBug(t.target.elements["bug"].value);
                  //               setShowGracias(true);
                  //               toast.close(bugToast.current);
                  //             }}
                  //           >
                  //             <Flex mt={3} alignItems="flex-end">
                  //               <Textarea
                  //                 resize="none"
                  //                 borderColor={
                  //                   colorMode === "dark" ? "textdark" : "text"
                  //                 }
                  //                 color={
                  //                   colorMode === "dark" ? "textdark" : "text"
                  //                 }
                  //                 focusBorderColor={
                  //                   colorMode === "dark"
                  //                     ? "electivas.400"
                  //                     : "electivas.500"
                  //                 }
                  //                 size="sm"
                  //                 name="bug"
                  //               />
                  //               <DarkMode>
                  //                 <IconButton
                  //                   ml={3}
                  //                   colorScheme="purple"
                  //                   size="sm"
                  //                   type="submit"
                  //                   icon={<ChatIcon />}
                  //                 />
                  //               </DarkMode>
                  //             </Flex>
                  //           </form>
                  //           <Text fontSize="sm" mt={2}>
                  //             ¿Usás Github? me ayudás mucho más levantando un
                  //             issue{" "}
                  //             <Link
                  //               isExternal
                  //               _hover={{
                  //                 color:
                  //                   colorMode === "dark"
                  //                     ? "electivas.400"
                  //                     : "electivas.500",
                  //               }}
                  //               href="https://github.com/FdelMazo/FIUBA-Map/issues/new"
                  //             >
                  //               directamente{" "}
                  //               <ExternalLinkIcon
                  //                 color={
                  //                   colorMode === "dark"
                  //                     ? "electivas.400"
                  //                     : "electivas.500"
                  //                 }
                  //                 mx="2px"
                  //               />
                  //             </Link>
                  //           </Text>
                  //         </AlertDescription>
                  //       </Box>
                  //       <CloseButton
                  //         color={
                  //           colorMode === "dark"
                  //             ? "electivas.400"
                  //             : "electivas.500"
                  //         }
                  //         onClick={() => toast.close(props.id)}
                  //         position="absolute"
                  //         right="8px"
                  //         top="8px"
                  //       />
                  //     </Alert>
                  //   ),
                  //   status: "info",
                  //   position: "bottom",
                  //   duration: null,
                  //   isClosable: true,
                  // }));
                }}
              >
                <TagLabel lineHeight={2}>
                  {false ? "Gracias!" : "Sugerencias"}
                </TagLabel>

                <TagRightIcon as={false ? CheckIcon : ChatIcon} />
              </Tag>
            </Box>
          </Box>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MateriasDrawer;
