import React from 'react';
const styled = window.styled;

const CommentContainer = styled.div`
  display: flex;
  justify-content: start;
  max-width: 648px;
  flex-direction: column;
`;

const PicNameDateContainer = styled.div`
  display: flex;
  justify-content: start;
  box-sizing: border-box;
  flex-direction: row;
  max-width: 648px;
`;

const Image = styled.img`
  height: 46px;
  width: 46px;
  background-color: rgb(216, 216, 216);
  vertical-align: middle;
  display: block;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(255, 255, 255);
  overflow: hidden;
`;

const NameDateContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  margin-left: 16px;
  box-sizing: border-box;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  line-height: 1.43;
  color: #484848;
`;

const Name = styled.div`
  font-size: 15.5px;
  font-weight: 450;
`;

const PostDate = styled.div`
  font-size: 13.5px;
  font-weight: 150;
`;

const Comment = styled.div`
  ${'' /* margin-top: 16px; */}
  word-wrap: break-word;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 16px;
  font-weight: 349;
  line-height: 1.375em;
  color: #484848;
`;

const Divider = styled.div`
    margin-top: 24px;
    margin-bottom: 24px;
    box-sizing: border-box;
    display: block;
    border-bottom-width: var(--border-rule-border-width, 1px);
    border-bottom-color: var(--color-divider, #EBEBEB);
    border-bottom-style: solid;
`;

const ReviewListEntry = (props) => {
  const date = (month, year) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return months[Number(month) - 1] + ' ' + year;
  };

  return (
    <CommentContainer>
      <PicNameDateContainer>
        <Image src={props.review.imgURL} ></Image>
        <NameDateContainer>
          <Name>{props.review.name}</Name>
          <PostDate>{date(props.month, props.year)}</PostDate>
        </NameDateContainer>
      </PicNameDateContainer>
      <Comment>{props.review.comment}</Comment>
      <Divider></Divider>
    </CommentContainer>
  );
};

export default ReviewListEntry;