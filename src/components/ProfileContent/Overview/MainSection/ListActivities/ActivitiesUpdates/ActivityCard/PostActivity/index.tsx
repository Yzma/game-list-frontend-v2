import { Avatar } from 'antd';

import { PostsDTOResponse } from '@services/InteractiveEntity/usePostsAndStatusUpdates';
import styles from '@/components/ProfileContent/Overview/MainSection/ListActivities/ActivitiesUpdates/ActivityCard/PostActivity/PostActivity.module.scss';

export default function PostActivity({
  post,
  currentUserId,
}: {
  post: PostsDTOResponse;
  currentUserId: number;
}) {
  // const { handleAddFollow, contextHolder: handleFollowContextHolder } =
  //   useAddRemoveFollowCustomHook();

  return (
    <div className={styles.postActivityContainer}>
      <div className={styles.postActivityHeader}>
        <Avatar
          src={post.user.userPicture}
          size={50}
          onClick={async () => {
            if (post.user.id && post.user.id !== currentUserId) {
              // await handleAddFollow(post);
              console.log('Add follow');
            }
          }}
          style={{ cursor: `${post.user.id !== currentUserId && 'pointer'}` }}
        />
        {post.user.username && (
          <a
            href={`/user/${post.user.username}`}
            aria-label={post.user.username}
          >
            {' '}
            {post.user.username}
          </a>
        )}
      </div>
      <div className={styles.postActivityBody}>
        <div>
          <p>{post.text}</p>
        </div>
      </div>
      {/* {handleFollowContextHolder} */}
    </div>
  );
}
