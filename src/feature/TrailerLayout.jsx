import TrailerLayoutLeft from './TrailerLayoutLeft';
import TrailerLayoutRight from './TrailerLayoutRight';

export default function TrailerLayout({ movieId }) {

    return (
        <div className='bg-opacity-20 absolute flex justify-center items-end h-full w-full pt-4'>
            <div className='flex justify-between w-11/12 h-full items-end'>
                <TrailerLayoutLeft movieId={movieId} />
                <TrailerLayoutRight movieId={movieId} />
            </div>
        </div>
    )
}
