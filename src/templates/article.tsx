import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface Props extends RouteComponentProps {}

const  Article: React.FC<Props> = () =>  {
  return (
    <div style={{marginTop: 200}}>Hello</div>
  )
}

export default Article ;
