export const GITHUB_ORG_URL = `https://github.com/DHRA-2131`;
export const GITHUB_REPO_URL = `${GITHUB_ORG_URL}`;

export const VEX_FORUM_URL = `https://www.vexforum.com/`;

export interface Example {
	name: string;
	code: string;
}

export const EXAMPLES: Example[] = [
	{
		name: "Basic",
		code: `
void start()
  {Basic
    // Require that T inherits from std::enable_shared_from_this<T> to
    // ensure that we can get a weak pointer reference to the underlying
    // data for safe multithreading
    static_assert(
        std::is_base_of_v<std::enable_shared_from_this<T>, T>,
        "Task<T> requires T to inherit from"
        " std::enable_shared_from_this<T>");

    // Check that the thread is valid before starting (IE, Not default
    // constructed)
    if (validThread)
    {
      // Get a weak pointer reference to the underlying data for the task
      std::weak_ptr<T> self = data->weak_from_this();

      // Start the PROS task with a lambda that captures the weak pointer
      task = pros::Task(
          [&]() {
            bool valid = true;

            // While the thread is marked as valid
            while (valid)
            {
              if (auto s = self.lock())
              {
                valid = validThread;  // Check if the thread is still valid
                taskFunction();       // Execute the task function
              }
              else
              {
                valid = false;
              }  // If the weak pointer can't be locked, the underlying
                 // data has been destroyed, so exit the thread cleanly

              // Delay to not hog the CPU, and to allow other tasks to run.
              pros::delay(delayMs);
            }
          },
          taskName.c_str());
    }
  }`,
	},
];

export const DOCS_SIDEBAR = {
	"01. Getting Started": [
		"index",
		"prerequisites",
		"program-structure",
		"building-uploading",
		"using-the-terminal",
		"competition",
	],
	"02. Devices": [
		"peripherals",
		"motor",
		"controller",
		"inertial-sensor",
		"rotation-sensor",
		"distance-sensor",
		"optical-sensor",
	],
	"03. Multitasking": [
		"async-introduction",
	],
	"04. Specific Topics": [
		"abort",
		"features",
	],
	"05. C++ Stuffs": [
		"basic-syntax",
		"classes",

	]
};

export const LEARN_SIDEBAR = {
	"Troubleshooting & Repair":
	[
		{
			title: "Brains",
			children: [
				"troubleshooting/add-remove-field-control",
				"troubleshooting/fix-ports",
				"troubleshooting/fix-motor",
				"troubleshooting/install-vex-os",
			]
		}
	]
}

export const PROGRAMMING_SIDEBAR = {
	"Getting Started": [
		{
			title: "New Project",
			children: [
				"getting-started/creating-a-new-pros-project",
				"getting-started/essence-of-programming", 
				"getting-started/how-fix-clang", 
				"getting-started/installing-an-ide", 				 
				"getting-started/using-source-control", 
			]
		}
	], 
	
	"Writing Code": [
		{
			title: "Creating Files",
			children: [
				"cpp-tutorials/creating-new-files/header-files",
				"cpp-tutorials/creating-new-files/source-files",
			]
		},	
		{
			title: "C++ Tutorials",
			children: [
				"cpp-tutorials/basic-cpp-syntax",
				"cpp-tutorials/comments",
				"cpp-tutorials/how-cpp-works",
				"cpp-tutorials/installing-cpp",
				"cpp-tutorials/variables",
				"cpp-tutorials/print-statements",
				"cpp-tutorials/conditional-statements",
				"cpp-tutorials/loops",
				"cpp-tutorials/functions",
				"cpp-tutorials/vectors-and-arrays",
				"cpp-tutorials/namespaces",
				"cpp-tutorials/pointing",
				"cpp-tutorials/classes",
			]
		},	
	],
	"Pros Specific": [
		{
			title: "Multi-threading",
			children: [
				"pros-specific/threading",
			]	
		},	
	],
	"Control Theory": [
		{
			title: "Feedback Controllers",
			children: [
				"control-theory-for-vex/feedback-controllers/feedback-controller",
				"control-theory-for-vex/feedback-controllers/pid-controller",
			],
		},
		{
			title: "Localization Methods",
			children: [
				"control-theory-for-vex/localization/odometry",
				"control-theory-for-vex/localization/monte-carlo-localization",
				"control-theory-for-vex/localization/kalman-filtering",
				"control-theory-for-vex/localization/vision-odometry",
			]
		},
		{
			title: "Path Following",
			children: [
				"control-theory-for-vex/path-following/pure-pursuit",
				"control-theory-for-vex/path-following/ramsette",
			]
		},
	],
	"Resorce Bank": 
	[
		{
			title: "Visual Media",
			children: [
				"random-club-resources/math-youtube",				
			]
		},
		{
			title: "Graphs",
			children: [
				"random-club-resources/desmos",
			]
		},
	],
}

export const SUMMER_CAMP_SIDEBAR = {
	"Everyone" : [
		// How to edit the website
		// Organizing Team - Team practices, common pitfalls
		// Logbooking?		
	],
	"Programming" : [
		// Installing Pros
		// First Project
		// Driver Control
		// Move Forwards and Backwards
		// Turning Left and Right
		// Using a PID Controller
	],
	"Building" : [
		// Masterclass in vex videos
		// Install the fusion library
		// Onshape?
	],	
}