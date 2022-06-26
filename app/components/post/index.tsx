import type { Props } from './types';
import { sPostContainer, sPostTitle, sPostBody } from './styles';

const Post = ({ header, body }: Props) => {
  return (
    <div className={sPostContainer}>
      {header && <h2 className={sPostTitle}>{header}</h2>}
      <p className={sPostBody}>{body}</p>
    </div>
  );
};

export default Post;
