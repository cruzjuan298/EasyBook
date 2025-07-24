'use client'
import { useRouter } from "next/navigation"
import Navbar from "@/components/Navbar/Navbar"
import IntegrationCard from "@/components/Integrations/IntegrationCard"
import styles from "./page.module.css"

export default function Home() {
    const router = useRouter();

    const handleGoDashbaord = () => {
        router.push("/dashboard");
    }

    return(
        <div className={styles.homeDiv}>
            <Navbar
            leftSideChildren={
                <h1 className={styles.title}>Integrations</h1>
            }
            rightSideChildren={
                <>          
                    <button type="button" className={styles.button} onClick={handleGoDashbaord}>
                        <svg className={styles.calIcon} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#3b82f6"><path d="M186.67-633.33h586.66v-113.34H186.67v113.34Zm0 0v-113.34 113.34Zm0 553.33q-27 0-46.84-19.83Q120-119.67 120-146.67v-600q0-27 19.83-46.83 19.84-19.83 46.84-19.83h56.66V-880h70v66.67h333.34V-880h70v66.67h56.66q27 0 46.84 19.83Q840-773.67 840-746.67v280.34q-15.78-7.86-32.39-13.1-16.61-5.24-34.28-8.24v-79H186.67v420h296.66q6.34 18.67 14.84 35 8.5 16.34 20.16 31.67H186.67Zm540.66 40q-79.95 0-136.31-56.35-56.35-56.36-56.35-136.32 0-79.95 56.35-136.31 56.36-56.35 136.31-56.35 79.96 0 136.32 56.35Q920-312.62 920-232.67q0 79.96-56.35 136.32Q807.29-40 727.33-40Zm61.17-93.67 27.83-28-75-75v-112H702V-222l86.5 88.33Z"/></svg>
                    </button>

                    <button type="button" className={styles.button}>
                      <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 20 20" height="40px" viewBox="0 0 20 20" width="40px" fill="#3b82f6"><g><rect fill="none" height="20" width="20"/></g><g><g><path d="M10 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 3.5c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 11c-2.05 0-3.87-.95-5.07-2.44 1.45-.98 3.19-1.56 5.07-1.56s3.62.58 5.07 1.56c-1.2 1.49-3.02 2.44-5.07 2.44z"/></g></g></svg>
                    </button>
                </>
            }
            />

            <div className={styles.integrationsDiv}>
                <h1 className={styles.integrateTitle} > Connect your favorite tools here: </h1>
                <div className={styles.integrationCards} >
                    <IntegrationCard 
                    title={"zoom"}  
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" aria-label="Zoom" role="img" viewBox="0 0 512 512"><rect width="512" height="512" rx="15%" fill="#2D8CFF"/><path fill="#ffffff" d="M428 357c8 2 15-2 19-8 2-3 2-8 2-19V179c0-11 0-15-2-19-3-8-11-11-19-8-21 14-67 55-68 72-.8 3-.8 8-.8 15v38c0 8 0 11 .8 15 1 8 4 15 8 19 12 9 52 45 61 45zM64 187c0-15 0-23 3-27 2-4 8-8 11-11 4-3 11-3 27-3h129c38 0 57 0 72 8 11 8 23 15 30 30 8 15 8 34 8 72v68c0 15 0 23-3 27-2 4-8 8-11 11-4 3-11 3-27 3H174c-38 0-57 0-72-8-11-8-23-15-30-30-8-15-8-34-8-72z"/></svg>
                    }
                    />
                    <IntegrationCard />
                    <IntegrationCard />
                    <IntegrationCard />
                </div>
            </div>
        </div>
    )
}