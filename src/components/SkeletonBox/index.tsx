import styles from './styles.module.css'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const SkeletonBox = () => {
    return(
        <div className={styles.container}>
            <div className={styles.skeletonHeader}>
                <div>
                    <Skeleton circle={true} height={'100px'} width={'100px'}/>
                </div>
                
            </div>

            <div className={styles.skeletonBody}>
                <Skeleton count={2} height={'30px'}/>
            </div>
        </div>
    )
}