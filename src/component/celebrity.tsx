import { useMediaQuery, Box, Text, Image, Button, HStack, VStack, Center, Input, Heading } from "@chakra-ui/react";
import { SearchIcon, ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

import avatar from "../assets/avatar.jpg";
import rmale from "../assets/rect-male.png";
import logo from "../assets/logo.png";
import blackLogo from "../assets/black-logo.png";
import { Link } from 'react-router-dom';
import { BsCheckCircle, BsBoxArrowUp, BsThreeDotsVertical, BsStar, BsFillPersonFill } from "react-icons/bs";

interface RubyType {
    w: number
    h: number
    fill?: string
}
const Ruby = ({ w, h, fill }: RubyType) => {
    return (
        <svg width={w} height={h} viewBox="0 0 33 29" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M27.8145 0L33 9.06085H27.2075L23.2424 0H27.8145ZM20.4819 0L24.4469 9.06085H8.5483L12.5181 0H20.4819ZM5.18551 0H9.75595L5.79254 9.06085H0L5.18551 0ZM0 10.8737H5.76846L12.8152 25.1269C12.8327 25.1641 12.8361 25.2062 12.8248 25.2457C12.8136 25.2852 12.7884 25.3193 12.7538 25.342C12.7192 25.3647 12.6775 25.3743 12.6363 25.3692C12.5952 25.3641 12.5572 25.3446 12.5294 25.3142L0 10.8737ZM8.49049 10.8737H24.5095L16.6598 28.8906C16.6474 28.9228 16.6254 28.9505 16.5967 28.97C16.568 28.9895 16.534 29 16.4992 29C16.4644 29 16.4304 28.9895 16.4017 28.97C16.373 28.9505 16.351 28.9228 16.3386 28.8906L8.49049 10.8737ZM20.1832 25.1269L27.2299 10.8737H32.9984L20.4722 25.3094C20.4465 25.3444 20.4082 25.3683 20.3652 25.3763C20.3222 25.3843 20.2777 25.3758 20.2408 25.3525C20.204 25.3292 20.1775 25.2929 20.1668 25.251C20.156 25.2091 20.1619 25.1647 20.1832 25.1269Z" fill="url(#paint0_linear_2_52)" />
            <defs>
                <linearGradient id="paint0_linear_2_52" x1="15.7326" y1="14.5" x2="10.4032" y2="6.07824" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#7E599B" />
                    <stop offset="1" stopColor="#BF76F3" />
                </linearGradient>
            </defs>
        </svg>
    )
}

function Celebrity() {
    const [isMobile] = useMediaQuery('(max-width: 520px)')
    const gBaseColor = '#201d23';
    const gbBaseColor = '#161218';
    return (
        <>
            <Box pr='35px' pl='35px' color='white'>
                <HStack justify='space-between' pt={10} pb={2}>
                    <Box className={`${isMobile ? '' : 'justify'}`}>
                        <Link to='/home'> <Image w='60px' src={logo} /></Link>
                        <Box className="justify" ml={isMobile ? '0px' : '20px'} borderBottom='2px #3f3943 solid'>
                            <SearchIcon w='13px' color='gray.300'></SearchIcon>
                            <Input className="site-font" w='100px' ml='5px' placeholder="search" variant='unstyled'></Input>
                        </Box>
                    </Box>
                    <Box>
                        <HStack>
                            <Box className={`${isMobile ? '' : 'justify'}`} display={isMobile ? 'flex' : ''}
                                flexDir={`${isMobile ? 'column' : 'row'}`}
                                borderRadius='7px' overflow='hidden'>
                                <Box className="justify " fontSize='18px' color="white" p='4px 8px 4px 8px' background={gBaseColor}>
                                    <Ruby h={20} w={15} fill='red'></Ruby>&nbsp; 35,675
                                </Box>
                                <Box fontSize='18px' color="white" p='6px 8px 6px 8px' background={gbBaseColor}>$ 35.66</Box>
                            </Box>
                            <Image w='60px' borderRadius={50} src={avatar}></Image>
                        </HStack>
                    </Box>
                </HStack>
                <Center>
                    <VStack h='600px' w={isMobile ? '100%' : ''}>
                        <Text className='site-font'>You have up to 3 min, 29 sec</Text>
                        <Box className="justify" pt={isMobile ? '10px' : ''} justifyContent='space-between' w='100%'>
                            <Text ml='10px' fontFamily='proxima_nova_rgregular' fontSize='13px' color='#50ba51'>Online</Text>
                            <HStack className="justify" display={isMobile ? '' : 'none'} >
                                <BsThreeDotsVertical style={{ cursor: 'pointer' }} fontSize='30px' ></BsThreeDotsVertical>
                                <BsBoxArrowUp style={{ cursor: 'pointer' }} fontSize='30px' ></BsBoxArrowUp>
                                <BsStar style={{ cursor: 'pointer' }} fontSize='30px' ></BsStar>
                            </HStack>
                        </Box>
                        <HStack mt={30} spacing={5} w={isMobile ? '100%' : ''} position='relative'>
                            <Box position='relative' overflow='hidden' border='2px #50ba51 solid' p={0} h={isMobile ? '480px' : '570px'} w={isMobile ? '100%' : '420px'} borderRadius={10}>
                                <HStack spacing={0} w={isMobile ? '100%' : ''}>
                                    <Box h='70px' flexGrow={2} background={gbBaseColor} p='10px'>
                                        <HStack alignItems='center'>
                                            <Heading className="site-font" as='h3' size='md' >Future</Heading>
                                            <BsCheckCircle></BsCheckCircle>
                                            {/* <Badge p={2} backgroundColor='green.400' borderRadius={50}></Badge> */}
                                        </HStack>
                                        <Text fontFamily='proxima_nova_rgregular'>@futurehendrixx</Text>
                                    </Box>
                                    <Box h='70px' display='flex' alignItems='center' flexGrow={1} background={gBaseColor} p='10px'>
                                        <HStack margin='auto'>
                                            <Ruby w={30} h={20}></Ruby>
                                            <Heading className="site-font" fontSize='25px' >250</Heading>
                                            <Text fontSize='13px' marginTop='7px!important' >/sec</Text>
                                        </HStack>
                                    </Box>
                                </HStack>
                                <Box>
                                    <Image src={rmale} w='100%' h={isMobile ? '55vh' : '70vh'}></Image>
                                </Box>

                                {/* header layout on image */}
                                <Box position='absolute' ml='6px' mr='6px' top={20} left={0} right={0}>
                                    <HStack justifyContent='space-evenly'>
                                        <Box flexGrow={1} h='6px' borderRadius='5px' background='#3a383b'></Box>
                                        <Box flexGrow={1} h='6px' borderRadius='5px' background='#838284'></Box>
                                        <Box flexGrow={1} h='6px' borderRadius='5px' background='#838284'></Box>
                                    </HStack>
                                </Box>

                                {/* arrow layout on image*/}
                                <Box _hover={{ cursor: 'pointer' }} borderRadius='50%' background='#4a484b' position='absolute' left='5px' top='50%' p='5px'>
                                    <ChevronLeftIcon _hover={{ color: '#50ba51' }} fontSize='30px'></ChevronLeftIcon>
                                </Box>
                                <Box _hover={{ cursor: 'pointer' }} borderRadius='50%' background='#4a484b' position='absolute' right='5px' top='50%' p='5px'>
                                    <ChevronRightIcon _hover={{ color: '#50ba51' }} fontSize='30px'></ChevronRightIcon>
                                </Box>

                                {/* footer1 layout on image*/}
                                <Box position='absolute' left='30%' bottom='66px' height='40px' w='40%' background='rgba(10, 7, 13, 0.5)' backdropFilter='blur(3px)'></Box>
                                <Box textAlign='center' position='absolute' right='13%' bottom='48px' w='60%' p='24px'>
                                    <HStack>
                                        <BsFillPersonFill fontSize='20px'></BsFillPersonFill>
                                        <Text fontFamily='proxima_nova_rgregular' fontSize={isMobile ? "13px" : "20px"} color='white'>16 in queue</Text>
                                    </HStack>
                                </Box>

                                {/* footer2 layout on image*/}
                                <Box position='absolute' right={0} left={0} bottom={-1} height='70px' background='rgba(10, 7, 13, 0.5)' backdropFilter='blur(3px)'></Box>
                                <Button _hover={{ boxShadow: ' 0 0 10px 0 #50ba51 inset, 0 0 10px 4px #50ba51 ' }} position='absolute' right='20%' bottom={2} w='60%' p={isMobile ? '14px' : '24px'}>
                                    <HStack>
                                        <Image w='45px' src={blackLogo}></Image>
                                        <Heading className="site-font video_effect" fontSize={isMobile ? '15px' : '22px'} color='gray.700'>Video Chat</Heading>
                                    </HStack>
                                </Button>
                            </Box>

                            {/* other tools */}
                            <VStack display={isMobile ? 'none' : ''} position='absolute' right="-40px" top={0}>
                                {/*  BsBoxArrowUp, BsThreeDotsVertical, BsStar, */}
                                <BsThreeDotsVertical style={{ cursor: 'pointer' }} fontSize='30px' ></BsThreeDotsVertical>
                                <BsBoxArrowUp style={{ marginTop: "40px", cursor: 'pointer' }} fontSize='30px' ></BsBoxArrowUp>
                                <BsStar style={{ marginTop: "40px", cursor: 'pointer' }} fontSize='30px' ></BsStar>
                            </VStack>
                        </HStack>
                    </VStack>
                </Center>
            </Box>

        </>
    );
}

export default Celebrity;
