import React, { useState } from 'react'
import * as M from './style';
import moment from 'moment';
const Messages: React.FC = () => {
  const [messages] = useState<any>({
    '31-01-2024': Array(20).fill('1'),
    '1-02-2024': Array(20).fill('2'),
    '2-02-2024': Array(20).fill('3'),
  })

  const [text] = useState<string>(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem at temporibus nam numquam doloremque iure tenetur unde nisi. Repudiandae, officia? Omnis eveniet unde voluptatem exercitationem, libero quo nemo dolores repellendus quis tempora tempore amet ratione voluptatibus eligendi ut praesentium!`)


  const getMessageDate = (key: any) => {
    const moment_obj = moment();
    const currentDate = moment_obj.format('D-MM-YYYY');
    const previousDate = moment_obj.subtract('1', 'days').format('D-MM-YYYY');
    const date = moment(key, 'D-MM-YYYY').format('ddd, D MMM');

    if (previousDate === key) return 'Yesterday';
    if (currentDate === key) return 'Today';

    return date;
  }
  return (
    <M.MessagesWrapper>
      {
        Object.keys(messages).map(key => (
          <M.MessageBox className='text-white' key={`message-date-${key}`}>
            <M.MessageDate> {getMessageDate(key)}</M.MessageDate>
            <M.Messages>
              {messages[key].map((_: any, index: number) => {
                const remote: string = (Math.random() < 0.5).toString();
                return (
                  <M.Message
                    key={`${key}-message-${index}`}
                    $remote={remote}>
                    <M.Text>{text.slice(0, Math.floor(Math.random() * text.length) + 1)}</M.Text>
                    <M.Time
                      $remote={remote}
                    >11:11</M.Time>
                  </M.Message>
                )
              })}
            </M.Messages>
          </M.MessageBox>
        )
        )
      }
    </M.MessagesWrapper>
  )
}

export default Messages
