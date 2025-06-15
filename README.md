# Exopromise

A NestJS module that provides a Promise-based API for executing asynchronous operations



## What is this?

Exopromise converts promises running in the same instance into http requests and runs them. It aims for a more balanced resource usage on the host. Thus, the server load running in multi-instance mode or cluster mode will be rebalanced via the load balancer. It is suitable for bulk operations.

The problem of load distribution can be solved with multiple threads, but for systems running with a container and orchestration tool, using multiple threads will increase chaoticness and unpredictability. NodeJS is suitable for orchestration tools due to its single thread nature. Therefore, it is a useful method to manage promise structures by converting them into http requests.

Note: Not suitable for singleton systems.

## Usage
Import ExopromiseModule into the AppModule;
```ts
import { ExopromiseModule } from 'exopromise';

@Module({
imports: [ExopromiseModule.register({ baseUrl: 'http://localhost:3000' })],
controllers: [AppController],
providers: [AppService]
})
export  class  AppModule  {}
```

After that, just add the Exopromise decorator to the async methods you want to use. That's all.

```ts
import  { Injectable }  from  '@nestjs/common';
import  { Exopromise }  from  'exopromise';

@Injectable()
export  class  ExampleService  {

	@Exopromise() // <-- This decorator will handle the request and response automatically
	async  consumeMessage(/** you can use parameters */):  Promise<any>  {

		/**
		* do amazing things...
		*/

		return  Promise.resolve();
	}
}
```
