import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
    const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>
    useEffect(() => {
        const div = messageRef.current
        if(div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messageRef])

  return (
      <Container ref={messageRef}>
          <Messages>
              {Array.from(Array(15).keys()).map(n => (
                  <ChannelMessage 
                    key={n}
                    author='Leander Silveira'
                    date='06/06/2022'
                    content='Hoje eu clonei o discord'
                  />
              ))}

              <ChannelMessage 
                    author='Tanner Foust'
                    date='06/06/2022'
                    content={
                        <>
                          <Mention>@Leander Silveira</Mention>, me carrega no cs de novo por favor?
                        </>
                    }
                    hasMention
                    isBot
                  />
          </Messages>
          <InputWrapper>
            <Input type='text' placeholder='Conversar em #chat-livre'/>
            <InputIcon />
          </InputWrapper>
      </Container>
  )
}

export default ChannelData;