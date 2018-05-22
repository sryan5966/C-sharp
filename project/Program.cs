using System;

namespace Treehouse.FitnessFrog
{
    class Program
    {
        static void Main()
        {
            int runningTotal = 0;

            bool keepGoing = true;
            while(keepGoing)
            {
                // Prompt user for minutes exercised 
                Console.Write("Enter how many minutes you exercised or type \"quit\" to exit: ");
                string entry = Console.ReadLine();        

                if(entry == "quit")
                {
                    keepGoing = false;
                }
                else
                {
                    // Add minutes exercised to total 
                    int minutes = int.Parse(entry);
                  
                  if(minutes <= 10)
                  {
                    Console.WriteLine("better than nothing, am i right");
                  }
                  
                  else if(minutes <= 30){
                  Console.WriteLine("way to go hot stuff");
                  }
                  
                   else if(minutes <= 60){
                  Console.WriteLine("you must be a ninja!!");
                  }
                  else
                  {
                  Console.WriteLine("ok now your just showing off!");
                  }
                  
                    runningTotal = runningTotal + minutes;

                    // Display total minutes exercised to the screen 
                    Console.WriteLine("You've entered " + runningTotal + " minutes.");
                }
                // Repeat until user quits
            }

            Console.WriteLine("Goodbye");
        }
    }
}