import { PropsWithChildren } from 'react';
import { Col, Row } from 'reactstrap';
import { EmptyRowCol } from '../common';

import { Style } from '../common/Style';
import { IFooter } from './IFooter';

export const Footer = {
  Component,
};

function Component({ payload }: PropsWithChildren<{ payload: IFooter.Payload }>) {
  return (
    <Row>
      <Col style={Style.footerCover}>
        <div style={Style.footer} className="text-center mt-4">
          <EmptyRowCol>
            <small>

              {/*  v.{`${payload.version} / `} */}
              {/* Github 주소는 origin repository 의 주소를 넣는다. */}
              {/* <HrefTargetBlank url="https://github.com/uyu423/resume-nextjs" text="Github" />*/}
              {/* <HrefTargetBlank url="https://blog.outsider.ne.kr/1234" text="Outsider" />*/}
              {/*{' / '} */}

              Thanks for Thank you for taking a look
            </small>
          </EmptyRowCol>
        </div>
      </Col>
    </Row>
  );
}
