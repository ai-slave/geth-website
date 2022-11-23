import { FC } from 'react'; 
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Stack, Text } from '@chakra-ui/react';
import { DocsLinks } from './DocsLinks';

interface Props {
  paths: string[];
}

export const DocsNav: FC<Props> = ({ paths }) => {

  return (
    <Stack w={{ base: '100%', lg: 72 }}>
      <Stack display={{ base: 'block', lg: 'none' }}>
        <Accordion allowToggle>
          <AccordionItem>
              <AccordionButton
                display='flex'
                py={4}
                px={8}
                border='2px'
                borderColor='primary'
                placeContent='space-between'
                bg='button-bg'
                _hover={{
                  bg: 'primary',
                  color: 'bg'
                }}
                _expanded={{
                  bg: 'primary',
                  color: 'bg'
                }}
              >
                <Text as='h4' textStyle='docs-nav-dropdown'>
                  Documentation
                </Text>
                <AccordionIcon />
              </AccordionButton>
            <AccordionPanel p={0}>
              <DocsLinks paths={paths} />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Stack>
      <Stack display={{ base: 'none', lg: 'block' }}>
        <DocsLinks paths={paths} />
      </Stack>
    </Stack>
    
  );
};
