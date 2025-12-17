
public class SumOfAllSubArrays {
    public static void main(String[] args) {
        SumOfAllSubArrays s = new SumOfAllSubArrays();
        int[] arr = {1, 2, 3};

       System.out.println(s.brute(arr));
        System.out.println(s.optimal(arr));
    }
 
    int brute(int[] arr) {
        int sum = 0;
        for (int i = 0; i < arr.length; i++)
            for (int j = i; j < arr.length; j++)
                for (int k = i; k <= j; k++)
                    sum += arr[k];
        return sum;
    }

    int optimal(int[] arr) {
        int sum = 0;
        for (int i = 0; i < arr.length; i++)
            sum += arr[i] * (i + 1) * (arr.length - i);
        return sum;
    }
}
