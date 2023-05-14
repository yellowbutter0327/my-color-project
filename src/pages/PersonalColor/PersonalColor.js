import React, { useState, useEffect } from 'react';
import './PersonalColor.scss';
import Preview from './Component/Preview';
import image1 from 'assets/PersonalColor/image1.jpg';

function PersonalColor() {
  return (
    <div className="container">
      <div className="color-wrap">
        <h1 className="search-title">나의 퍼스널 키워드 찾기🔍</h1>
        <div className="info-wrap">
          <h2 className="color-title">봄웜톤 특징 </h2>
          <p className="color-info">
            <span className="color-info-span">
              "산뜻반짝"이라는 수식어가 찰떡인 봄 유형!{' '}
              <strong>윤기 있는 피부와 색조 메이크업</strong>이 중요해요.{' '}
            </span>
            <span className="color-info-span">
              {' '}
              봄유형은 <strong>명랑하고 생동감 있는 컬러</strong>가 어울리고
              산뜻하고 활동적인 느낌을 줍니다.
            </span>
          </p>
          <h3>봄라이트</h3>
          <p className="color-info">
            밝고 여리여리한 컬러와 맑고 짙은 음영보다는 맑은 화장이 어울려요!
            <span className="color-info-span">
              그래서 <strong>헤어색도 같이 밝은 명도</strong>로 사용해주는 것이
              좋고, 메이크업에서 섀도우,립스틱 모두{' '}
              <strong>
                밝은 살구, 코랄, 오렌지, 살몬핑크 등 밝으면서도 따뜻한 느낌
              </strong>
              으로 환한 이미지를 연출해주세요
            </span>
          </p>
          <h3>봄클리어</h3>
          <p className="color-info">
            라이트와 유사하지만{' '}
            <strong>
              눈동자가 어두운 갈색이나 검정빛을 띄고 있어서 대비감이 강한 편
            </strong>
            입니다.
            <span className="color-info-span">
              전체적으로 파스텔톤을 사용하시되 비비드의 순색의 컬러감을 포인트로
              주어서 스타일링에서 과감한 배색을 해주세요.
            </span>
            <span className="color-info-span">
              메이크업 색조는{' '}
              <strong>
                {' '}
                코랄이나 오렌지 색감을 써주시고 레드나 원색의 오렌지 립으로
                발랄한 느낌
              </strong>
              을 더해주면 굿굿 👍
            </span>
          </p>
          <h3>봄스트롱</h3>
          <p className="color-info">
            <strong>강한 원색이 잘 어울리는 타입</strong>으로 중간 밝기의
            피부톤에 블랙 또는 어두운 갈색의 눈동자를 지니고 있어 대비감이
            중간입니다.
            <span className="color-info-span">
              진한 순색이 잘 어울리기 때문에{' '}
              <strong>
                얼굴 근처에는 원색을 하의에는 어두운 색이나 블랙을 매치
              </strong>
              해서 생동감 있게 스타일링 해주세요.
            </span>
            <span className="color-info-span">
              메이크업 색조는{' '}
              <strong>
                오렌지나 코랄을 쓰고, 레드나 원색의 오렌지 립으로 건강한 느낌
              </strong>
              을 주시면 좋습니다.
            </span>
          </p>
        </div>
        <div className="info-wrap">
          <h2>여름쿨톤 특징</h2>
          <p className="color-info">
            <span className="color-info-span">
              <strong>시원하고 부드러운</strong> 여름!{' '}
            </span>
            파랑을 바탕으로 <strong>뿌연, 흐릿한 느낌</strong>을 가지고 있는
            색상으로 이루어져 있습니다. 매트한 피부 표현과 부드러운 색조로
            청순하고 깨끗한 이미지를 가지고 있어요.
          </p>
          <h3>여름라이트</h3>
          <p className="color-info">
            <span className="color-info-span">
              밝고 창백한 피부를 가지고 눈동자도 붉은빛을 띠고 있어 대비감이
              약합니다.
            </span>
            흰 티셔츠에 청바지가 잘 어울리는 유형으로 색을 많이 쓰면 자칫
            알록달록 촌스러워 보일 수 있어요. 이 유형은{' '}
            <strong>덜어내는 것</strong>이 포인트에요.{' '}
            <span className="color-info-span">
              연한 핑크, 연보라의 섀도우로 가볍게 아이메이크업을 하고,
              체리레드나 보랏빛이 섞인 핑크립을 사용해주세요!
            </span>
          </p>
          <h3>여름클리어</h3>
          <p className="color-info">
            창백하지만 까만 눈동자로 대비감이 강합니다.{' '}
            <strong>밝은 쿨톤의 색을 사용하고 과감한 포인트 배색</strong>으로
            리듬감 있는 스타일링을 해주세요.
            <span className="color-info-span">
              섀도우는 밝은 에시 그레이나 로즈빛으로 가볍게, 립은 핫핑크나
              체리레드로 대비를 주어 <strong>생동감 있게 메이크업</strong>{' '}
              해주세요.
            </span>
          </p>
          <h3>여름뮤트</h3>
          <p className="color-info">
            {' '}
            장밋빛의 잿빛 피부를 가지고 있는 뮤트톤! 중간 밝기에서 어두운 색의
            스킨톤에 블랙이나 다크 브라운 계열의 눈동자 색을 가지고 있어
            대비감을 약합니다.{' '}
            <span className="color-info-span">
              그레이가 잘 어울리는 타입으로 스타일링도 메이크업도{' '}
              <strong>전체적으로 은은하게 연출</strong>하면 좋아요! 말린 장미,
              팥죽색 같은 채도가 낮은 부드러운 색을 선택하세요.{' '}
            </span>
          </p>
        </div>

        <div className="info-wrap">
          <h2>가을웜톤 특징</h2>
          <p className="color-info">
            "반짝반짝"이라는 수식어가 잘 어울리는 봄 유형!{' '}
            <strong>반짝거리고 윤기 있는 피부와 색조 표현</strong>이 중요해요.
            <span className="color-info-span">
              명랑한 봄유형은 밝은 인상과 생동감 있는 컬러가 어울리고 외모와
              상관없이 활동적이고 귀여운 느낌을 줍니다.
            </span>
          </p>
          <h3>가을뮤트</h3>
          <p className="color-info">
            골드빛의 피부와 갈색의 눈동자를 가지고 있어 대비감이 약하기 때문에
            <strong> 고상하고 부드러운 느낌</strong> 주는 것이 좋아요.
            <span className="color-info-span">
              우아하고 고급스러움을 연출하기 위해 뮤트한 컬러의 코랄베이지,
              베이지의 섀도우를 바르고, 탁한 코랄이나 벽돌립색을 선택해주세요.
            </span>
          </p>
          <h3>가을딥</h3>
          <p className="color-info">
            언뜻 보면 태닝한 것 같은 건강한 느낌을 가지고 있는 딥 타입! 어두운
            갈색, 검정 계열의 눈동자 색을 가지고 있어 중간 대비감을 가지고
            있습니다. <strong>웜톤의 진하고 어두운 색</strong>을 쓰는 게 좋아요.
            <span className="color-info-span">
              전채적으로 연결되는 느낌의 메이크업이 좋아 진한 브러운으로 세미
              스모키를 해서 그윽한 눈매, 진하고 딥한 오렌지 레드나 딥레드를
              사용하여 고상함을 강조해주세요.
            </span>
          </p>
          <h3>가을다크</h3>
          <p className="color-info">
            {' '}
            여성보다는 남성에게 많이 보이는 타입으로 대비감이 약합니다.{' '}
            <span className="color-info-span">
              어두운 암청색 계열로{' '}
              <strong>상하의 톤차이가 적게 나도록 스타일링</strong>해 주시고,
              메이크업 컬러도 짙고 무거운 종류의 브라운 위주로 하시면 좋아요.{' '}
            </span>
          </p>
        </div>

        <div className="info-wrap">
          <h2>겨울쿨톤 특징</h2>
          <p className="color-info">
            톤이 밝아 창백해 보이거나 어두운 경우가 많습니다. 그렇기 때문에
            과감한 스타일로 연출해 주시면 좋아요.{' '}
            <span className="color-info-span">
              <strong>
                색상 자체는 절제하여 포인트 배색으로 카리스마를 더해주고, 실버를
                기준으로 선명하고 도도한 이미지
              </strong>
              를 주세요.
            </span>
          </p>
          <h3>겨울 스트롱</h3>
          <p className="color-info">
            올리브톤이라고 부르는 연둣빛 피부를 가지고 있고, 검정색 눈동자로
            대비감이 강한 편이에요.{' '}
            <strong>
              선명함이 특징이기 때문에 <strong>원포인트 메이크업</strong>으로
              모던하고 시크한 느낌을 주세요.
            </strong>{' '}
            <span className="color-info-span">
              섀도우는 그레이시한 색으로 음영을 주고, 립에 핑크가 섞인 차가운
              레드 컬러를 사용해서 또렷함을 강조해주세요. 스타일링도 비비드와
              화이트를 교차 사용하여 대비감을 강하게 주시면 좋아요.
            </span>
          </p>
          <h3>겨울 딥</h3>
          <p className="color-info">
            보통 까맣다고 느끼는 사람이면 이 유형일 확률이 높습니다.{' '}
            <strong>절제된 배색으로 정리되고 깔끔한 느낌으로 스타일링</strong>
            해주시고, 매끈한 피부표현과 블러셔보다는 쉐딩을, 눈화장이나 립은
            무게감 있는 색으로 과감하게 연출해주세요.
          </p>
          <h3>겨울 다크</h3>
          <p className="color-info">
            어두운 노란피부, 검정색 눈동자로 쿨톤의 어두운 임청색을 많이 사용해
            주세요.{' '}
            <strong>
              각 톤의 차이가 적게 나는 것이 좋고, 밝은 컬러는 피해주시는 게
              좋습니다.{' '}
            </strong>
            <span className="color-info-span">
              메이크업은 짙은 섀도우를 선택하고 풍성한 속눈썹을 살려 깔끔한 음영
              메이크업이 잘 어울려서 고혹적이고 매력적인 느낌을 줄 수 있어요.
            </span>
          </p>
        </div>
      </div>

      <div className="color-check-wrap">
        <div className="color-picker">
          <h4>Spring</h4>
          <div className="color-box">
            <button className="color" style={{ background: '#f4cda4' }} />
            <button className="color" style={{ background: '#f2b3a8' }} />
            <button className="color" style={{ background: '#4c7f82' }} />
            <button className="color" style={{ background: '#94d3ca' }} />
            <button className="color" style={{ background: '#7b639f' }} />
            <button className="color" style={{ background: '#005072' }} />
            <button className="color" style={{ background: '#61aa51' }} />
            <button className="color" style={{ background: '#9ec6f0' }} />
          </div>
          <h4>Summer</h4>
          <div className="color-box">
            <button className="color" style={{ background: '#eadbca' }} />
            <button className="color" style={{ background: '#43393a' }} />
            <button className="color" style={{ background: '#624f4c' }} />
            <button className="color" style={{ background: '#43393a' }} />
            <button className="color" style={{ background: '#e2a4b3' }} />
            <button className="color" style={{ background: '#7273ad' }} />
            <button className="color" style={{ background: '#487187' }} />
            <button className="color" style={{ background: '#436659' }} />
          </div>
        </div>
        <Preview />
        <div className="color-picker">
          <h4>Autumn</h4>
          <div className="color-box">
            <button className="color" style={{ background: '#c97947' }} />
            <button className="color" style={{ background: '#caab55' }} />
            <button className="color" style={{ background: '#6d6e2b' }} />
            <button className="color" style={{ background: '#983636' }} />
            <button className="color" style={{ background: '#e9dbc3' }} />
            <button className="color" style={{ background: '#d7af84' }} />
            <button className="color" style={{ background: '#1f2950' }} />
            <button className="color" style={{ background: '#000000' }} />
          </div>
          <h4>Winter</h4>
          <div className="color-box">
            <button className="color" style={{ background: '#7a2840' }} />
            <button className="color" style={{ background: '#215f4f' }} />
            <button className="color" style={{ background: '#164669' }} />
            <button className="color" style={{ background: '#443359' }} />
            <button className="color" style={{ background: '#2a2a37' }} />
            <button className="color" style={{ background: '#1a2b50' }} />
            <button className="color" style={{ background: '#c3c1c2' }} />
            <button className="color" style={{ background: '#fefefe' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalColor;
