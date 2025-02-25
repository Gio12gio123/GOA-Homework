import java.util.Scanner;

public class Main {

    public static void dayOfWeek() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number (1-7): ");
        int day = scanner.nextInt();

        switch (day) {
            case 1:
                System.out.println("Monday");
                break;
            case 2:
                System.out.println("Tuesday");
                break;
            case 3:
                System.out.println("Wednesday");
                break;
            case 4:
                System.out.println("Thursday");
                break;
            case 5:
                System.out.println("Friday");
                break;
            case 6:
                System.out.println("Saturday");
                break;
            case 7:
                System.out.println("Sunday");
                break;
            default:
                System.out.println("Invalid day");
        }
    }

    public static void evenOdd() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int number = scanner.nextInt();

        String result = (number % 2 == 0) ? "Even" : "Odd";
        System.out.println(result);
    }

    public static void weatherForecast() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number (1-4): ");
        int weather = scanner.nextInt();

        switch (weather) {
            case 1:
                System.out.println("Sunny");
                break;
            case 2:
                System.out.println("Rainy");
                break;
            case 3:
                System.out.println("Cloudy");
                break;
            case 4:
                System.out.println("Windy");
                break;
            default:
                System.out.println("Not defined");
        }
    }

    public static void monthAndHalf() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number (1-12): ");
        int month = scanner.nextInt();

        String monthName = "";
        switch (month) {
            case 1: monthName = "January"; break;
            case 2: monthName = "February"; break;
            case 3: monthName = "March"; break;
            case 4: monthName = "April"; break;
            case 5: monthName = "May"; break;
            case 6: monthName = "June"; break;
            case 7: monthName = "July"; break;
            case 8: monthName = "August"; break;
            case 9: monthName = "September"; break;
            case 10: monthName = "October"; break;
            case 11: monthName = "November"; break;
            case 12: monthName = "December"; break;
            default: monthName = "Invalid month"; break;
        }

        String halfOfYear = (month >= 1 && month <= 6) ? "First half" : "Second half";

        System.out.println("Month: " + monthName);
        System.out.println("This month is in the: " + halfOfYear);
    }

    public static void main(String[] args) {
        dayOfWeek();
        evenOdd();
        weatherForecast();
        monthAndHalf();
    }
}
//for me :
//Scanner - აბრუნებს სკანერს.
//nextInt - აბრუნებს მთელ რიცხვს.
//print - აბრუნებს ტექსტს.
//println - აბრუნებს ტექსტს ახალ ხაზზე.
//switch - შეაფასებს შეყვანილ პარამეტრს და აბრუნებს შედეგს.
//case - შეაფასებს შეყვანილ პარამეტრს და აბრუნებს შედეგს.
//default - შეყვანილი პარამეტრის შეფასებული შედეგის გარეშე გამოსაყვებად.
//? - შეაფასებს შეყვანილ პარამეტრს და აბრუნებს შედეგს.
//: - შეყვანილი პარამეტრის შეფასებული შედეგის გარეშე გამოსაყვებად.
// Description: Write a function that takes an array as an argument and returns the number of elements in that array






