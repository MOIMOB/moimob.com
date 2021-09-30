import { useSelector } from 'react-redux';
import { skeleton } from '../helpers/utils';

const Features = () => {
    const loading = useSelector(state => state.loading);

    const renderSkeleton = () => {
        let array = [];
        for (let index = 0; index < 1; index++) {
            array.push((
                <li key={index}>
                    <span>
                        {skeleton({ width: 'w-6', height: 'h-4', className: 'mr-2' })}
                        {skeleton({ width: 'w-32', height: 'h-4' })}
                    </span>
                </li>
            ))
        }

        return array;
    }

    return (
        <div className="card shadow-lg compact bg-base-100">
            <div className="card-body">

                <h5 className="card-title" style={{ marginBottom: '.5em' }}>
                    {
                        loading ? skeleton({ width: 'w-20', height: 'h-8' }) : (
                            <span className="opacity-70">Mentions</span>
                        )
                    }
                </h5>
                <ul className="menu row-span-3 bg-base-100 text-base-content text-opacity-60">
                    {
                        loading ? renderSkeleton() : (
                            <>
                                <li>
                                    <p>
                                        Monthly Bill Planner is mentioned in
                                        <a className="text-primary" href="https://smarttip.org/best-bill-reminder-apps/#Monthly_Bill_Planner"> Top 10 Best Bill Reminder Apps For Android & iOS </a>
                                        on the
                                        <a className="text-primary" href="https://smarttip.org"> Smart Tip Website</a>.
                                    </p>
                                </li>
                            </>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Features;