import type { Props } from './types';
import { sPostContainer, sPostTitle, sPostBody, sPostAuthor } from './styles';

const Post = ({ header, body, authorName }: Props) => {
  return (
    <div className={sPostContainer}>
      {header && <h2 className={sPostTitle}>{header}</h2>}
      {authorName && <h2 className={sPostAuthor}>by {authorName}</h2>}
      <p className={sPostBody}>{body}</p>
    </div>
  );
};

export default Post;
